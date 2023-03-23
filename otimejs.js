let button=document.getElementById('button');

button.addEventListener('click',()=>{
    const salary=parseInt(document.getElementById('salary').value);
    const overtime=parseInt(document.getElementById('overtime').value);
    const result=document.getElementById('output');
    let salary_status=false,overtime_status=false;

    if(salary === ''|| isNaN(salary)||(salary<=0)){
        document.getElementById('salary').innerHTML='please key a valid ';
    }else{
        document.getElementById('salary').innerHTML='';
        salary_status=true;

    }
    if(overtime ===''|| isNaN(overtime)||(overtime<=0)){
        document.getElementById('overtime').innerHTML='please key a valid ';
    }else{
        document.getElementById('overtime').innerHTML='';
        overtime_status=true;
    }
    
    
    let hourSalary= salary/30/8;
    let secondHr=240/180;
    let thridHr=240/144;
    let eighthHr=240/90;
    if(overtime <= 2){
        const overtimePay = parseInt(hourSalary*overtime*secondHr).toFixed(0);
        result.innerHTML="奴工的醫藥費"+overtimePay;
    }else{
        if(overtime <= 8){
            const overtimePay = parseInt(hourSalary*2*secondHr)+parseInt ((hourSalary*parseInt(overtime-2))*thridHr.toFixed(3));
            result.innerHTML="奴工的醫藥費"+overtimePay;
        }else{
            if(overtime > 8 && overtime <=12){
                const overtimePay = parseInt(hourSalary*2*secondHr)+parseInt(hourSalary*6*thridHr)+parseInt(hourSalary*parseInt (overtime-8))*eighthHr.toFixed(1000));
                result.innerHTML="奴工的醫藥費"+overtimePay;
        }else{
            if(overtime>12){
                result.innerHTML="您已經違反勞基法,請打1999或1955";
            }
        }
    }}
       
});

