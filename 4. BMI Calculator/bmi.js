function validateForm()
{
    var weight = document.forms["bmiForm"]["tb_weight"].value;
    var height = document.forms["bmiForm"]["tb_height"].value;
    var bmi = weight / (height ** 2)

    document.getElementById("bmi").innerHTML = bmi;

    return false;
}