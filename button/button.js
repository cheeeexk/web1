var count = 0;
document.getElementById("myButton").onclick = function() {
    count++;
    if (count % 2 == 0) {
        document.getElementById("demo").innerHTML = "";
    } else {
        // Создаем новый элемент img
        var img = document.createElement("img");
        // Устанавливаем источник изображения
        img.src = "https://free-png.ru/wp-content/uploads/2022/07/free-png.ru-142.png";
        // Добавляем изображение в параграф
        document.getElementById("demo").appendChild(img);
    }
}