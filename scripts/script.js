function resetNIC()
{
    document.getElementById("nicNo").innerHTML = "NIC No : ";
    document.getElementById("nicType").innerHTML = "NIC Type : ";
    document.getElementById("gender").innerHTML = "Gender : ";
    document.getElementById("bDay").innerHTML = "Birth Day : ";
    document.getElementById("nicInput").value = "";

}

function getNIC()
{
    let nic = document.getElementById("nicInput").value;

    var nicLen = 5;
    nicLen = nic.length;

    if (nicLen == 0)
    {
        alert("Please Enter a  NIC Number");
    }

    else if (nicLen != 10 && nicLen != 12)
    {
        alert("Invalid NIC Number");
        document.getElementById("nicNo").innerHTML = "NIC No : ";
        document.getElementById("nicType").innerHTML = "NIC Type : ";
        document.getElementById("gender").innerHTML = "Gender : ";
        document.getElementById("bDay").innerHTML = "Birth Day : ";
        document.getElementById("nicInput").value = "";
    }
    else
    {
        var bDayNo = 0;
        var bYear = 0;

    if (nicLen == 10)
    {
        document.getElementById("nicNo").innerHTML = "NIC No : " + nic ;
        document.getElementById("nicType").innerHTML = "NIC Type : OLD";

        for (i = 0 ; i < 3 ; i++)
        {
            bDayNo += parseInt(nic[2 + i]) * Math.pow(10 , 2 - i);
        }

        if (bDayNo < 500)
        {
            document.getElementById("gender").innerHTML = "Gender : Male";
        }
        else
        {
            document.getElementById("gender").innerHTML = "Gender : Female";
            bDayNo -= 500;
        }

        for (i = 0 ; i < 2 ; i++)
        {
            bYear += parseInt(nic[i]) * Math.pow(10 , 1 - i);
        }
        document.getElementById("bDay").innerHTML = "Birth Day : 19" + bYear + "-"; 

    }
    else if (nicLen == 12)
    {
        document.getElementById("nicNo").innerHTML = "NIC No : " + nic ;
        document.getElementById("nicType").innerHTML = "NIC Type : NEW";

        for (i = 0 ; i < 3 ; i++)
        {
            bDayNo += parseInt(nic[4 + i]) * Math.pow(10 , 2 - i);
        }
        
        if (bDayNo < 500)
        {
            document.getElementById("gender").innerHTML = "Gender : Male";
        }
        else
        {
            document.getElementById("gender").innerHTML = "Gender : Female";
            bDayNo -= 500;
        }

        for (i = 0 ; i < 4 ; i++)
        {
            bYear += parseInt(nic[i]) * Math.pow(10 , 3 - i);
        } 
        document.getElementById("bDay").innerHTML = "Birth Day : " + bYear + "-";
    }
    let month;
    var date;

    var dayNumber = bDayNo;

    if (dayNumber > 335)
    {
        month = "December";
        date = dayNumber - 335;
    }
    else if (dayNumber > 305)
    {
        month = "November";
        date = dayNumber - 305;
    }
    else if(dayNumber > 274)
    {
        month = "October";
        date = dayNumber - 274;
    }
    else if(dayNumber > 244) 
    {
        month = "September";
        date = dayNumber - 244;
    }
    else if(dayNumber > 213)
    {
        month = "August";
        date = dayNumber - 213;
    }
    else if(dayNumber > 182)
    {
        month = "July";
        date = dayNumber - 182;
    }
    else if(dayNumber > 152)
    {
        month = "June";
        date = dayNumber - 152;
    }
    else if(dayNumber > 121)
    {
        month = "May";
        date = dayNumber - 121;
    }
    else if(dayNumber > 91)
    {
        month = "April";
        date = dayNumber - 91;
    }
    else if(dayNumber > 60)
    {
        month = "March"
        date = dayNumber - 60;
    }
    else if(dayNumber > 31)
    {
        month = "Februay";
        date = dayNumber - 31;
    }
    else
    {
        month = "January";
        date = dayNumber;
    }

    document.getElementById("bDay").innerHTML += month + "-" + date;
    }
    
    if (bDayNo > 366)
    {
        document.getElementById("nicNo").innerHTML = "NIC No : ";
        document.getElementById("nicType").innerHTML = "NIC Type : ";
        document.getElementById("gender").innerHTML = "Gender : ";
        document.getElementById("bDay").innerHTML = "Birth Day : ";
        document.getElementById("nicInput").value = "";
        alert('Invalid NIC Number!!!');
    }
    
}