<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>I love you</title>
</head>
<body>

    <div id="paragraph" onclick="hi(this)">
        Hello sowjkjd
    </div>

    <script>
       

       const cloneElements = (original, deep, id) => {
        
        const clone = original.cloneNode(deep);
         clone.id = id;

         return clone;

       }
       const para = document.getElementById('paragraph');
       const node = cloneElements(para,true,'new');

       document.body.appendChild(node);

       console.log(node);
    
    </script>
    
</body>
</html>
