// const { element } = require("prop-types");

var productarray = [];
function myFunction() {
    var Company = document.getElementById("company").value;
    var Model = document.getElementById("model").value;
    var Memory = document.getElementById("memory").value;
    var Price = document.getElementById("price").value;
    var Quantity = document.getElementById("quantity").value;
    console.log(Quantity)

    if (Company == "" || Model == "" || Memory == "" || Price == "") {
        alert("Please fill all the feilds");
    }

    var product = {
        CompanyName: Company,
        Pmodel: Model,
        Pmemory: Memory,
        Pprice: Price,
        Pquantity: Quantity,
    };
    productarray.push(product);
    Display();
};
function Display() {
    html =
        "<table><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price(Rs)</th><th>Quantity</th></tr>";
    productarray.forEach((element) => {
        html +=
            "<tr><td>" +
            element.CompanyName +
            "</td><td>" +
            element.Pmodel +
            "</td><td>" +
            element.Pmemory +
            "</td><td>" +
            element.Pprice +
            "</td><td>" +
            element.Pquantity +
            "</td></tr>";
    });
    html += "</table>";
    document.getElementById("demo").innerHTML = html;
};
// console.log(html);
function sort() {
    var Asc_Des = document.getElementById('Arranging').value;
    var Col_Select = document.getElementById("ColSelect").value;
    // console.log(Asc_Des);
    // console.log(Col_Select);
    if (Col_Select == "company") {
        if (Asc_Des == "ascending") {
            productarray.sort((a, b) => {
                // console.log("Inside Ascen Comp");
                if (a.CompanyName < b.CompanyName) {
                    return -1;
                }
                if (a.CompanyName > b.CompanyName) {
                    return 1;
                }
                return 0;
            });
        }
        else if (Asc_Des == "descending") {
            productarray.sort((a, b) => {
                // let AA = a.CompanyName;
                // let BB = b.company;

                if (a.CompanyName > b.CompanyName) {
                    return -1;
                }
                if (a.CompanyName < b.CompanyName) {
                    return 1;
                }
                return 0;
            });
        }
        else {
        }
        console.log(productarray);
    }

    else if (Col_Select == "model") {
        if (Asc_Des == "ascending") {
            productarray.sort((a, b) => {
                // let AA = a.model;
                // let BB = b.model;

                if (a.Pmodel < b.Pmodel) {
                    return -1;
                }
                if (a.Pmodel > b.Pmodel) {
                    return 1;
                }
                return 0;
            });

        } else if (Asc_Des == "descending") {
            productarray.sort((a, b) => {
                // let AA = a.model;
                // let BB = b.model;

                if (a.Pmodel > b.Pmodel) {
                    return -1;
                }
                if (a.Pmodel < b.Pmodel) {
                    return 1;
                }
                return 0;
            });
        }
        else {
        }

    }
    else if (Col_Select == "memory") {
        if (Asc_Des == "ascending") {
            productarray.sort((a, b) => a.Pmemory - b.Pmemory);
        }
        else if (Asc_Des == "descending") {
            productarray.sort((a, b) => b.Pmemory - a.Pmemory);
        } else {

        }

    }
    else if (Col_Select == "price") {
        if (Asc_Des == "ascending") {
            productarray.sort((a, b) => a.Pprice - b.Pprice);
        }
        else if (Asc_Des == "descending") {
            productarray.sort((a, b) => b.Pprice - a.Pprice);
        }
        else {

        }
    }
    else {

    } Display();
};

function search() {
    var SelectedField = document.getElementById("selectfield").value;
    var FieldType = document.getElementById("fieldtype").value;
    // console.log(SelectedField);
    // console.log(FieldType);
    html =
        "<table><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price(Rs)</th><th>Quantity</th></tr>";
    productarray.forEach(element => {
        // console.log(element.CompanyName);
        if (element.CompanyName == FieldType) {
            html +=
                "<tr><td>" +
                element.CompanyName +
                "</td><td>" +
                element.Pmodel +
                "</td><td>" +
                element.Pmemory +
                "</td><td>" +
                element.Pprice +
                "</td></tr>";
        }
        if (element.Pmodel == FieldType) {
            html +=
                "<tr><td>" +
                element.CompanyName +
                "</td><td>" +
                element.Pmodel +
                "</td><td>" +
                element.Pmemory +
                "</td><td>" +
                element.Pprice +
                "</td></tr>";
        }
        if (element.Pmemory == FieldType) {
            html +=
                "<tr><td>" +
                element.CompanyName +
                "</td><td>" +
                element.Pmodel +
                "</td><td>" +
                element.Pmemory +
                "</td><td>" +
                element.Pprice +
                "</td></tr>";
        }
        if (element.Pprice == FieldType) {
            html +=
                "<tr><td>" +
                element.CompanyName +
                "</td><td>" +
                element.Pmodel +
                "</td><td>" +
                element.Pmemory +
                "</td><td>" +
                element.Pprice +
                "</td></tr>";
        }
    });
    html += "</table>";
    document.getElementById("demo").innerHTML = html;
}

var Holder = [];
var totalcost = 0;
function addtocart() {
    var A = document.getElementById("SelectedProduct").value;
    var B = document.getElementById("quantity2").value;
    var data = productarray[A];
    // console.log(data.Company);
    var calculatedData = (Number(data.Price)) * B;
    var data = {
        ProductDetail: data.CompanyName,
        Quantity: B,
        Price: data.Pprice,
    };
    totalcost += calculatedData;
    Holder.push(data);
};
var billtable = "<table><tr><th>ProductDetail</th><th>Quantity</th><th>Price</th></tr>";
function generatebill() {
    var row = ""
    Holder.forEach(element => {
        row += `<tr>
         <td>${element.ProductDetail}</td>
         <td>${element.Quantity}</td>
         <td>${element.Price}</td>
         </tr>`
    });
    document.getElementById("billtable").innerHTML = billtable + row +
        `<tr>
     <td>Total</td>
     <td></td>
     <td>${Total}</td>
     </tr></table>`;
};

function ItemsUpdate() {
    var NewIndex = document.getElementById("UpdatedItems").value;
    var NewQuantity = document.getElementById("UpdatedQuantity").value;
    var data = productarray[NewIndex];

    data.Pquantity = NewQuantity;

    Display()
}
