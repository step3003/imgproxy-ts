# imgproxy-ts

Usage
-----


```ts

    const salt = 'salt';
    const key = 'key';
    
    const url = 'http://img.example.com/pretty/image.jpg';

    let builder = new UrlBuilder(
        new UrlSigner(key, salt)
    )

    builder = builder.with(
        new Height(400),
        new Enlarge(1),
        new Width(400),
        new ResizeType('fill'),
    )
    
    builder.url(url); //ip7WGBgVi0Enpq6vooBXghVL4/h:400/el:1/w:400/rt:fill/aHR0cHM6Ly9zMy5h/c3RsLmJ5L3B1Ymxp/Yy8zNjM2L3Bob3Rv/LmpwZw

```
