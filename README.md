# Fastbook - Immersive Experiences Slider

Slider stile Mindvalley con scorrimento automatico di thumbnail e mockup iPhone centrale.

## Struttura File

```
/images
  - thumb-top-1.png ... thumb-top-11.png (11 thumbnail riga superiore)
  - thumb-bottom-1.png ... thumb-bottom-11.png (11 thumbnail riga inferiore)
  - iphone-mockup.png (mockup iPhone centrale)
```

## Caratteristiche

- ✅ 11 thumbnail nella riga superiore (scorrono da sinistra a destra)
- ✅ 11 thumbnail nella riga inferiore (scorrono da destra a sinistra)
- ✅ Mockup iPhone sovrapposto al centro
- ✅ Scorrimento automatico continuo e seamless
- ✅ Animazione in pausa al passaggio del mouse
- ✅ Completamente responsive
- ✅ Ottimizzato per iframe LearnWorld

## Come Usare

1. Inserisci le tue immagini nella cartella `images/` seguendo la nomenclatura sopra
2. Apri `index.html` nel browser per testare
3. Per embeddare su LearnWorld, usa questo iframe:

```html
<iframe src="URL_DEL_TUO_SLIDER" width="100%" height="800" frameborder="0"></iframe>
```

## Formato Immagini Consigliato

- **Thumbnail**: Formato quadrato (es. 400x400px) - PNG
- **iPhone Mockup**: PNG con trasparenza, circa 800-1000px di altezza

## Personalizzazione

- **Velocità scorrimento**: Modifica `40s` in `styles.css` nelle animazioni `scrollLeft` e `scrollRight`
- **Dimensione thumbnail**: Modifica `width` e `height` della classe `.thumbnail`
- **Colori**: Modifica i colori in `styles.css` (attualmente azzurro `#00A8E8`)
