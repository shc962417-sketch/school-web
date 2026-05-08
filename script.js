/* ========================= */
/* script.js */
/* ========================= */


/* SLIDER */

let images = [

    "images/slider1.jpg",
    "images/slider2.jpg",
    "images/slider3.jpg"

];

let index = 0;

function changeSlide(){

    document.getElementById("slideImage").src = images[index];

    index++;

    if(index >= images.length){

        index = 0;

    }
}

setInterval(changeSlide, 3000);


/* RESULT */

function showResult(){

    let roll = document.getElementById("rollNumber").value;

    let output = document.getElementById("resultOutput");



    if(roll == "101"){

        output.innerHTML = `

        <h2>વિદ્યાર્થી પરિણામ</h2>

        <table>

            <tr>
                <th>વિદ્યાર્થી નામ</th>
                <td>Rahul Patel</td>
            </tr>

            <tr>
                <th>ધોરણ</th>
                <td>10</td>
            </tr>

            <tr>
                <th>ગુજરાતી</th>
                <td>78</td>
            </tr>

            <tr>
                <th>અંગ્રેજી</th>
                <td>82</td>
            </tr>

            <tr>
                <th>ગણિત</th>
                <td>91</td>
            </tr>

            <tr>
                <th>વિજ્ઞાન</th>
                <td>88</td>
            </tr>

            <tr>
                <th>સામાજિક વિજ્ઞાન</th>
                <td>86</td>
            </tr>

            <tr>
                <th>કુલ ટકા</th>
                <td>85%</td>
            </tr>

            <tr>
                <th>પરિણામ</th>
                <td>PASS</td>
            </tr>

        </table>

        `;
    }



    else if(roll == "102"){

        output.innerHTML = `

        <h2>વિદ્યાર્થી પરિણામ</h2>

        <table>

            <tr>
                <th>વિદ્યાર્થી નામ</th>
                <td>Priya Joshi</td>
            </tr>

            <tr>
                <th>ધોરણ</th>
                <td>10</td>
            </tr>

            <tr>
                <th>ગુજરાતી</th>
                <td>89</td>
            </tr>

            <tr>
                <th>અંગ્રેજી</th>
                <td>90</td>
            </tr>

            <tr>
                <th>ગણિત</th>
                <td>95</td>
            </tr>

            <tr>
                <th>વિજ્ઞાન</th>
                <td>92</td>
            </tr>

            <tr>
                <th>સામાજિક વિજ્ઞાન</th>
                <td>91</td>
            </tr>

            <tr>
                <th>કુલ ટકા</th>
                <td>91%</td>
            </tr>

            <tr>
                <th>પરિણામ</th>
                <td>PASS</td>
            </tr>

        </table>

        `;
    }



    else{

        output.innerHTML = `

        <h2 style="color:red;">
            Result મળ્યો નથી
        </h2>

        `;
    }

}