function validateForm()
{
    var weight = document.forms["bmiForm"]["tb_weight"].value;
    var height = document.forms["bmiForm"]["tb_height"].value;
    var bmi = weight / (height ** 2)

    var bmiInfo = "";
    var bmiColor = "";

    if (bmi < 16)
    {
        bmiInfo = "invalid";
        bmiColor = "black"
    }
    else if (bmi <= 18.5)
    {
        bmiInfo = "body weight deflict";
        bmiColor = "DodgerBlue"
    }
    else if (bmi <= 24)
    {
        bmiInfo = "norm";
        bmiColor = "Aquamarine"
    }
    else if (bmi <= 30)
    {
        bmiInfo = "weight over";
        bmiColor = "ForestGreen"
    }
    else if (bmi <= 35)
    {
        bmiInfo = "obesity first degree";
        bmiColor = "Yellow"
    }
    else if (bmi <= 40)
    {
        bmiInfo = "obesity second degree";
        bmiColor = "Orange"
    }
    else
    {
        bmiInfo = "obesity thrid degree";
        bmiColor = "Red"
    }

    document.getElementById("bmi").innerHTML = bmi;
    document.getElementById("bmiInfo").innerHTML = bmiInfo;
    document.getElementById("bmiInfo").style.color = bmiColor;

    return false;
}