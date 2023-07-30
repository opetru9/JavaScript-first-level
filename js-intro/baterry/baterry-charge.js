baterryCharge = 70              //%
chargePercentInMinutes = 10     //1% - 10 min

MINUTES_IN_ONE_HOUR = 60        // min

etWorkInHours = baterryCharge * chargePercentInMinutes / MINUTES_IN_ONE_HOUR
alert("remaining timpe (in hours)" + etWorkInHours)



//etWorkInMinutes = baterryCharge * chargePercentInMinutes 