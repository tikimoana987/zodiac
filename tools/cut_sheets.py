"""Zodiaque & Décans — découpe d'une planche Gemini (2048 × 2048, grille 3 × 2) en 6 cartes.
Usage : python tools/cut_sheets.py planche.jpg NOM cle1,cle2,cle3,cle4,cle5,cle6 [dossier_sortie]
Détecte les gouttières sombres (repli sur la grille de référence), retire le liseré doré (3,5 %), enregistre chaque carte
en JPEG et une image de contrôle. Utiliser « - » à la place d'une clé pour ignorer une case. Conversion WebP 320 × 512 :
voir zodiac-tarot-art.js (même procédé : PIL, qualité 74). Nécessite Pillow et numpy.
"""
import sys, os, numpy as np
from PIL import Image
def cut(sheet, keys, prefix):
    im = Image.open(sheet).convert('RGB'); a = np.asarray(im).astype(int); h, w, _ = a.shape
    dark = a.sum(axis=2) < 140
    def runs(v, thr=0.97):
        out, s = [], None
        for i, x in enumerate(v):
            if x > thr and s is None: s = i
            if x <= thr and s is not None: out.append((s, i - 1)); s = None
        if s is not None: out.append((s, len(v) - 1))
        return [r for r in out if r[1] - r[0] >= 3]
    def spans(r, n):   # zones entre les bandes sombres (fusion des bandes collées)
        merged = []
        for b in r:
            if merged and b[0] - merged[-1][1] < 15: merged[-1] = (merged[-1][0], b[1])
            else: merged.append(b)
        return [(merged[i][1] + 1, merged[i + 1][0] - 1) for i in range(len(merged) - 1)][:n]
    cols, rows = spans(runs(dark.mean(axis=0)), 3), spans(runs(dark.mean(axis=1)), 2)
    # Grille de référence (planche 1, 2048 px) : préférée quand la détection en diffère de peu
    # (un ciel très sombre en bord de carte se confond avec la gouttière)
    REF_C, REF_R = [(33, 647), (716, 1331), (1400, 2015)], [(32, 989), (1058, 2014)]
    if (w, h) == (2048, 2048):
        near = lambda d, r: all(abs(a0 - b0) < 30 and abs(a1 - b1) < 30 for (a0, a1), (b0, b1) in zip(d, r))
        cols = REF_C if near(cols, REF_C) else cols; rows = REF_R if near(rows, REF_R) else rows
    print(sheet, '| colonnes', cols, '| lignes', rows)
    os.makedirs(OUT, exist_ok=True); thumbs = []
    for i, k in enumerate(keys):
        if k in (None, '-'): continue
        (x0, x1), (y0, y1) = cols[i % 3], rows[i // 3]
        m = round((x1 - x0) * 0.035)
        c = im.crop((x0 + m, y0 + m, x1 - m, y1 - m)); c.save(os.path.join(OUT, f'{k}.jpg'), quality=88)
        thumbs.append(c.resize((180, round(180 * c.size[1] / c.size[0]))))
    W = sum(t.size[0] + 8 for t in thumbs); H = max(t.size[1] for t in thumbs)
    out = Image.new('RGB', (W, H), (60, 60, 60)); x = 0
    for t in thumbs: out.paste(t, (x, 0)); x += t.size[0] + 8
    out.save(os.path.join(OUT, f'controle-{prefix}.png'))
OUT = 'planches-decoupees'
if __name__ == '__main__':
    if len(sys.argv) > 4: OUT = sys.argv[4]
    cut(sys.argv[1], sys.argv[3].split(','), sys.argv[2])
