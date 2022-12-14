const app = Vue.createApp({
  data() {
    return {
      numCorrect: 0,
      total: 15,
      percent:"0.0%",
      //meaning for abrivations for variables
      //Easy *subject* Answer
      //Easy *subject* Answer Correct?
      EEA:"",EEAC:"",
      EMA: "",EMAC: "",
      EHA: "",EHAC: "",
      ESA: "",ESAC: "",
      EAA: "",EAAC: "",
      EBA: "",EBAC: "",
      

      //medium questions
      MEA:"",MEAC:"",
      MMA: "",MMAC: "",
      MHA: "",MHAC: "",
      MSA: "",MSAC: "",
      MAA: "",MAAC: "",
      MBA: "",MBAC: "",

      //hard questions
      HEA:"",HEAC:"",
      HMA: "",HMAC: "",
      HHA: "",HHAC: "",
      HSA: "",HSAC: "",
      HAA: "",HAAC: "",
      HBA: "",HBAC: "",

      
    };
  },
  watch: {//watches for the score change and sends to fucntion to calcualte the percent
    numCorrect(value) {
      this.getPercent(value);
    },
    //this will monitor if there is any change to any of the inputted answers until a correct answer is given
    EEA(value){
      this.validateEEA(value);
    },
    EMA(value){
      this.validateEMA(value);
    },
    EHA(value){
      this.validateEHA(value);
    },
    ESA(value){
      this.validateESA(value);
    },
    EAA(value){
      this.validateEAA(value);
    },
    EBA(value){
      this.validateEBA(value);
    },
   //meduium questions
   MEA(value){
    this.validateMEA(value);
    },
    MMA(value){
      this.validateMMA(value);
    },
    MHA(value){
      this.validateMHA(value);
    },
    MSA(value){
      this.validateMSA(value);
    },
    MAA(value){
      this.validateMAA(value);
    },
    MBA(value){
      this.validateMBA(value);
    },
    //hard questions
   HEA(value){
    this.validateHEA(value);
    },
    HMA(value){
      this.validateHMA(value);
    },
    HHA(value){
      this.validateHHA(value);
    },
    HSA(value){
      this.validateHSA(value);
    },
    HAA(value){
      this.validateHAA(value);
    },
    HBA(value){
      this.validateHBA(value);
    },


  },
methods:{
  clearscore (){//clears the scores 
    this.numCorrect=0;
    this.percent="0.0%";
    
    this.EEAC="";
    this.EEA="";
    this.EMAC="";
    this.EMA="";
    this.EHAC="";
    this.EHA="";
    this.ESAC="";
    this.ESA="";
    this.EAAC="";
    this.EAA="";
    this.EBAC="";
    this.EBA="";
    
    this.MEAC="";
    this.MEA="";
    this.MMAC="";
    this.MMA="";
    this.MHAC="";
    this.MHA="";
    this.MSAC="";
    this.MSA="";
    this.MAAC="";
    this.MAA="";
    this.MBAC="";
    this.MBA="";

    this.HEAC="";
    this.HEA="";
    this.HMAC="";
    this.HMA="";
    this.HHAC="";
    this.HHA="";
    this.HSAC="";
    this.HSA="";
    this.HAAC="";
    this.HAA="";
    this.HBAC="";
    this.HBA="";


    /*cant get the text to clear tried all of these

    document.getElelmentbyName("EasyMath").text="";
    document.getElelmentbyName("EasyMath").innerHTML="";
    document.getElelmentbyName("EasyMath").HTML="";
    $('label[id*=EasyMath]').text('');
    document.getElelmentbyName("EasyMath").value="";
    document.getElelmentbyName("EasyMath").setText="";
    document.getElelmentbyName("EasyMath").innerText="";

    */
    document.getElementById("EasyEnglish").disabled = false;
    document.getElementById("EasyMath").disabled = false;
    document.getElementById("EasyHistory").disabled = false;
    document.getElementById("EasyScience").disabled = false;
    document.getElementById("EasyBonus").disabled = false;
    document.getElementById("EasyArt").disabled = false;

    document.getElementById("MedEnglish").disabled = false;
    document.getElementById("MedMath").disabled = false;
    document.getElementById("MedHistory").disabled = false;
    document.getElementById("MedScience").disabled = false;
    document.getElementById("MedBonus").disabled = false;
    document.getElementById("MedArt").disabled = false;

    document.getElementById("HardEnglish").disabled = false;
    document.getElementById("HardMath").disabled = false;
    document.getElementById("HardHistory").disabled = false;
    document.getElementById("HardScience").disabled = false;
    document.getElementById("HardBonus").disabled = false;
    document.getElementById("HardArt").disabled = false;

    //radio buttons broke clearing them. also couldnt unselect radio buttons

  },
  getPercent(){//gets the percentage of right answers
    this.percent=((parseFloat(this.numCorrect)/parseFloat(this.total))*100).toFixed(2)+"%";
    if(this.numCorrect==15){
      alert("Max Score Reached! Only can earn Bonus points now. Good Luck!")
    }
  },
  validateEEA(value){
    if(value.toLowerCase()=="is"){
      //this.msg['EEA'] = 'correct'
      /*
      Another way to do this using messages
      https://codesandbox.io/s/dazzling-lehmann-wcb91?file=/src/App.vue:376-540
      */
     this.EEAC="Correct!";
     this.numCorrect++;
     document.getElementById("EasyEnglish").disabled = true;
    }else{
      this.EEAC=" Incorrect";
    }
  },
  validateEMA(value){
    if(value==345){
     this.EMAC="Correct!";
     this.numCorrect++;
     document.getElementById("EasyMath").disabled = true;
    }else{
      this.EMAC=" Incorrect";
    }
    
      
  },
  validateEHA(value){
    if(value==282){
     this.EHAC="Correct!";
     this.numCorrect++;
     document.getElementById("EasyHistory").disabled = true;
    }else{
      this.EHAC=" Incorrect";
    }
  },
  validateESA(value){
    if(value.toLowerCase()=="down"){
     this.ESAC="Correct!";
     this.numCorrect++;
     document.getElementById("EasyScience").disabled = true;
    }else{
      this.ESAC=" Incorrect";
    }
  },
  validateEBA(value){
    if(value.toLowerCase()=="galileo"){
     this.EBAC="Correct!";
     this.numCorrect++;
     document.getElementById("EasyBonus").disabled = true;
    }else{
      this.EBAC=" Incorrect";
    }
  },
  validateEAA(value){
    if(value.toLowerCase()=="abstract"){
     this.EAAC="Correct!";
     this.numCorrect++;
     document.getElementById("EasyArt").disabled = true;
    }else{
      this.EAAC=" Incorrect";
    }
  },
  //medium questions
  validateMEA(value){
    if(value.toLowerCase()=="exciting"){

     this.MEAC="Correct!";
     this.numCorrect++;
     document.getElementById("MedEnglish").disabled = true;
    }else{
      this.MEAC=" Incorrect"
    }
  },
  validateMMA(value){
    if(value==-1){
     this.MMAC="Correct!";
     this.numCorrect++;
     document.getElementById("MedMath").disabled = true;
    }else{
      this.MMAC=" Incorrect";
    }

  },
  validateMHA(value){
    if(value.toLowerCase()=="germany"){
     this.MHAC="Correct!";
     this.numCorrect++;
     document.getElementById("MedHistory").disabled = true;
    }else{
      this.MHAC=" Incorrect";
    }
  },
  validateMSA(value){
    if(value==13){
      this.numCorrect++;
     this.MSAC="Correct!";
     
     document.getElementById("MedScience").disabled = true;
    }else{
      this.MSAC=" Incorrect";
    }
  },

  validateMBA(value){
    if(value==80){
     this.MBAC="Correct!";
     this.numCorrect++;
     document.getElementById("MedBonus").disabled = true;
    }else{
      this.MBAC=" Incorrect";
    }
  },
  validateMAA(value){
    if(value==4){
     this.MAAC="Correct!";
     this.numCorrect++;
     document.getElementById("MedArt").disabled = true;
    }else{
      this.MAAC=" Incorrect";
    }
  },
  //hard questions
  validateHEA(value){
    if(value.toLowerCase()=="have worked"){
      document.getElementById("HardEnglish").disabled = true;
     this.HEAC="Correct!";
     this.numCorrect++;
    }else{
      this.HEAC=" Incorrect";
    }
  },
  validateHMA(value){
    if(value.toLowerCase()=="103-16i"){
      document.getElementById("HardMath").disabled = true;
     this.HMAC="Correct!";
     this.numCorrect++;
    }else{
      this.HMAC=" Incorrect";
    }

  },
  validateHHA(value){
    if(value==1982){
      document.getElementById("HardHistory").disabled = true;
     this.HHAC="Correct!";
     this.numCorrect++;
    }else{
      this.HHAC=" Incorrect";
    }
  },
  validateHSA(value){
    if(value.toLowerCase()=="quantitative"){
      document.getElementById("HardScience").disabled = true;
     this.HSAC="Correct!";
     this.numCorrect++;
    }else{
      this.HSAC=" Incorrect";
    }
  },
  validateHBA(value){
    if(value.toLowerCase()=="galileo"){
      document.getElementById("HardBonus").disabled = true;
     this.HBAC="Correct!";
     this.numCorrect++;
    }else{
      this.HBAC=" Incorrect";
    }
  },
  validateHAA(value){
    if(value.toLowerCase()=="seashell"){
      document.getElementById("HardArt").disabled = true;
     this.HAAC="Correct!";
     this.numCorrect++;
    }else{
      this.HAAC=" Incorrect";
    }
  },

  

}
}
);

app.mount('#CounterEX');
