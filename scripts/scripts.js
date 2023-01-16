for (let i = 1; i < 6; i++) {
    const h1 = document.createElement("h1");
    h1.innerText = "Rad" + i;
    h1.style.color = "#767AE3";
    h1.style.textAlign = "center";
    h1.style.font = `bold ${9 * i}px Times New Roman`;
    const hue = 90 + ((i * 22));
    h1.style.backgroundColor = `hsl(${hue},100%, 87%)`;         // loop som gör 5 h1, för varje loop ändras färg och font

    document.body.append(h1);
}

const div = document.createElement("div");
document.body.append(div);
div.style.display = "flex";         // ny div för nummer raderna
div.style.border = "1px solid";
div.style.justifyContent = "center";

for (let i = 0; i < 3; i++) {
    const list = document.createElement("ol");
    list.style.backgroundColor = "#A1A1F0";
    list.style.padding = "8px";
    list.style.margin = "50px";
    list.style.width = "50px";              // Gör 3 "ol" för nummer
    list.style.marginLeft = "200px";
    list.style.marginRight = "200px";


    div.append(list);



    for (let x = 0; x < 10; x++) {
        // om x = 0 gör 10 li
        if (i === 0) {
            const first = document.createElement("li");

            list.append(first);
            first.innerText = `${x}`;
            first.style.listStyle = "none";
            first.style.padding = "2px";
            first.style.color = "white";

            if (x % 2 === 0 && x !== 4) {
                first.style.backgroundColor = "black";

            }
            else if (x % 2 === 1 && x !== 4) {
                first.style.backgroundColor = "white";
                first.style.color = "black";

            }

        }

        else if (i === 1) {                     // kollar andra listan om i = 1
            const second = document.createElement("li");
            list.append(second);
            second.innerText = `${9 - x}`;
            second.style.listStyle = "none";
            second.style.padding = "2px";
            second.style.textAlign = "center";
            second.style.color = "white";

            if (x % 2 === 0 && x !== 1) {
                second.style.backgroundColor = "white";
                second.style.color = "black";

            }

            else if (x % 2 === 1 && x !== 1) {
                second.style.backgroundColor = "black";

            }
        }

        else if (i === 2) {     // kollar om i = 2 i tredje listan

            const numberArray = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];   //skapar array

            //skapar 10 st genom att loopa igenom arrayen
            const third = document.createElement("li");
            list.append(third);

            third.innerText = `${numberArray[x]}`;      // lägger till text i third elementet från värdet i arrayen
            third.style.padding = "2px";
            third.style.textAlign = "end";
            third.style.listStyle = "none";


            if (x % 2 === 0 && x !== 5) {
                third.style.color = "white";
                third.style.backgroundColor = "black";

            }

            else if (x % 2 == 1 && x !== 5) {
                third.style.backgroundColor = "white";

            }
        }
    }
}

