function quad(a,b,c){
    if(a==0) return "Коэффицент a не должен быть равным 0";

    var D = b*b - 4*a*c;
    var x1,x2;
    if(D>0){
        x1 = (-b + Math.sqrt(D))/(2*a);
        x2 = (-b - Math.sqrt(D))/(2*a);


        addTable(a,b,c,D,x1,x2);
        n = n + 1;
        return "Коэффициенты: a ="+a+", b="+b+", c = "+c+" \n Дискриминант(D) = "+D+"\n Корни уравнения: x1 = " + x1 + ", X2 = "+x2; 
    } else if(D==0){
        x1 = -b/(2*a);
        addTable(a,b,c,D,x1,0);
        n = n + 1;
        return "Коэффициенты: a ="+a+", b="+b+", c = "+c+" \n Дискриминант(D) = "+D+"\n Корень уравнения: x1 = " + x1; 
    } else if(D < 0){
        addTable(a,b,c,D,'Нет ', ' действительных корней');
        n = n + 1;
        return "Коэффициенты: a ="+a+", b="+b+", c = "+c+" \n Дискриминант(D) = "+D+"\n  Действительных корней нет";
    }


}
n = 1;
function prog(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var result = quad(a,b,c);

    document.getElementById('result').textContent = result;
    document.getElementById('otvet').style.display = 'block';
}

function addTable(a,b,c,D,x1,x2){
    var table = document.getElementById('table').getElementsByTagName('tbody')[0];
    var tr = document.createElement("tr");
    if(!Number.isFinite(x1)){
        tr.innerHTML = ' <td>'+n+ '</td> <td> a = '+ a +', b = ' + b + ', c = ' + c + '</td> <td> D = ' + D + '</td> <td> ' + x1 + x2 + '</td>';
    }else{
        tr.innerHTML = ' <td>'+n+ '</td> <td> a = '+ a +', b = ' + b + ', c = ' + c + '</td> <td> D = ' + D + '</td> <td> X1 = ' + x1 + ', X2 = ' + x2 + '</td>';
    }
    table.appendChild(tr);
}

document.getElementById('table').addEventListener('click', function(event) 
{
    var table =  document.getElementById('table');
    var row = window.event.target.parentNode.rowIndex;
    if(row != 0){
    table.deleteRow(row);

    
        var total = table.rows.length;
        for(var i=0; i<total; i++){
            if(i > 0){
                table.rows[i].cells[0].innerHTML = i;
            }
        }
        n = n -1;
    }
});