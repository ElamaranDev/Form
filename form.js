const form = document.getElementById("form1");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event){
    event.preventDefault();
    const name=document.getElementById('name').value;
    const age= document.getElementById('age').value;
    const college = document.getElementById('clg').value;
    const program = document.getElementById('pgm').value;
    const register = document.getElementById('reg').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('pno').value;
    const year = document.getElementById('year').value;

    var errorMessage ="";
    if(!validateEmail(email)){
        errorMessage+= "Invalid email format.\n";
    }
    if (!validatePhone(phone)) 
    {
        errorMessage += "Invalid phone number.\n";
    }
    if (errorMessage !== "") 
    {
        alert(errorMessage);
    } 
    else {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet([{
        Name: name,
        Email: email,
        Age: age,
        College: college,
        Program: program,
        Registration_No: register,
        Phone_no: phone,
        Academic_year: year }]);
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.writeFile(wb, 'Student_data.xlsx');
        form.reset();
    }
}
function validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function validatePhone(phone) {
    var re = /^\d{10}$/; 
    return re.test(phone);
}
