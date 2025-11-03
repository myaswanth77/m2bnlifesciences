const headers = [
  "Product Number",
  "Product Name",
  "Specification",
  "List Price",
  "Transportation",
  "Type",
  "Product Family"
];


const BlankSerum = [
["031A11.02","IPHASE Human Serum,Mixed Gender","50mL",65,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031A11.03","IPHASE Human Serum,Mixed Gender","100mL",125,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031B11.01","IPHASE Monkey(Cynomolgus) Serum,Single Donor,Male","5mL",150,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031B12.01","IPHASE Monkey(Cynomolgus) Serum,Single Donor,Female","5mL",152,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031B13.02","IPHASE Monkey(Cynomolgus) Serum,Mixed Gender","50mL",1520,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031B13.03","IPHASE Monkey(Cynomolgus) Serum,Mixed Gender","100mL",2980,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031B14.02","IPHASE Monkey(Cynomolgus) Serum,Mixed Male","50mL",1520,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031B15.02","IPHASE Monkey(Cynomolgus) Serum,Mixed Female","50mL",1548,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031B21.01","IPHASE Monkey(Rhesus) Serum,Single Donor,Male","5mL",150,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031B22.01","IPHASE Monkey(Rhesus) Serum,Single Donor,Female","5mL",152,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031B23.02","IPHASE Monkey(Rhesus) Serum,Mixed Gender","50mL",1520,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031B23.03","IPHASE Monkey(Rhesus) Serum,Mixed Gender","100mL",2980,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031B24.02","IPHASE Monkey(Rhesus) Serum,Mixed Male","50mL",1520,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031B25.02","IPHASE Monkey(Rhesus) Serum,Mixed Female","50mL",1548,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031C11.01","IPHASE Dog(Beagle) Serum,Single Donor,Male","5mL",45,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031C12.01","IPHASE Dog(Beagle) Serum,Single Donor,Female","5mL",47,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031C13.02","IPHASE Dog(Beagle) Serum,Mixed Gender","50mL",445,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031C13.03","IPHASE Dog(Beagle) Serum,Mixed Gender","100mL",980,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031C14.02","IPHASE Dog(Beagle) Serum,Mixed Male","50mL",445,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031C15.02","IPHASE Dog(Beagle) Serum,Mixed Female","50mL",455,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031D11.01","IPHASE Rat(Sprague-Dawley) Serum,Single Donor,Male","2mL",10,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031D12.01","IPHASE Rat(Sprague-Dawley) Serum,Single Donor,Female","2mL",11,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031D13.02","IPHASE Rat(Sprague-Dawley) Serum,Mixed Gender","50mL",152,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031D13.03","IPHASE Rat(Sprague-Dawley) Serum,Mixed Gender","100mL",300,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031D14.02","IPHASE Rat(Sprague-Dawley) Serum,Mixed Male","50mL",152,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031D15.02","IPHASE Rat(Sprague-Dawley) Serum,Mixed Female","50mL",155,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031D21.01","IPHASE Rat(Wistar) Serum,Single Donor,Male","2mL",12,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031D22.01","IPHASE Rat(Wistar) Serum,Single Donor,Female","2mL",13,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031D23.02","IPHASE Rat(Wistar) Serum,Mixed Gender","50mL",180,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031D23.03","IPHASE Rat(Wistar) Serum,Mixed Gender","100mL",345,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031D31.01","IPHASE Rat(Wistar Han) Serum,Single Donor,Male","2mL",56,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031D32.01","IPHASE Rat(Wistar Han) Serum,Single Donor,Female","2mL",58,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031D33.03","IPHASE Rat(Wistar Han) Serum,Mixed Gender","100mL",2750,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031E11.01","IPHASE Mouse(ICR/CD-1) Serum,Single Donor,Male","0.3mL",9,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031E12.01","IPHASE Mouse(ICR/CD-1) Serum,Single Donor,Female","0.3mL",10,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031E13.02","IPHASE Mouse(ICR/CD-1) Serum,Mixed Gender","50mL",167,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031E13.03","IPHASE Mouse(ICR/CD-1) Serum,Mixed Gender","100mL",335,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031E14.02","IPHASE Mouse(ICR/CD-1) Serum,Mixed Male","50mL",167,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031E15.02","IPHASE Mouse(ICR/CD-1) Serum,Mixed Female","50mL",169,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031E21.01","IPHASE Mouse(C57BL/6) Serum,Single Donor,Male","0.3mL",14,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031E22.01","IPHASE Mouse(C57BL/6) Serum,Single Donor,Female","0.3mL",15,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031E23.02","IPHASE Mouse(C57BL/6) Serum,Mixed Gender","50mL",690,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031E23.03","IPHASE Mouse(C57BL/6) Serum,Mixed Gender","100mL",1360,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031E41.01","IPHASE Mouse(BALB/c) Serum,Single Donor,Male","0.3mL",14,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031E42.01","IPHASE Mouse(BALB/c) Serum,Single Donor,Female","0.3mL",15,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031E43.02","IPHASE Mouse(BALB/c) Serum,Mixed Gender","50mL",690,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031E43.03","IPHASE Mouse(BALB/c) Serum,Mixed Gender","100mL",1360,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031E44.04","IPHASE Mouse(BALB/c) Serum,Mixed Male","5mL",14,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031F13.02","IPHASE Hamster Serum,Mixed Gender","50mL",4380,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031I11.01","IPHASE Rabbit(New Zealand White) Serum,Single Donor,Male","5mL",18,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031I12.01","IPHASE Rabbit(New Zealand White) Serum,Single Donor,Female","5mL",19,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031I13.02","IPHASE Rabbit(New Zealand White) Serum,Mixed Gender","50mL",178,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031I13.03","IPHASE Rabbit(New Zealand White) Serum,Mixed Gender","100mL",349,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031I21.01","IPHASE Rabbit(Japanese White) Serum,Single Donor,Male","5mL",20,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031I22.01","IPHASE Rabbit(Japanese White) Serum,Single Donor,Female","5mL",21,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031I23.02","IPHASE Rabbit(Japanese White) Serum,Mixed Gender","50mL",188,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031I23.03","IPHASE Rabbit(Japanese White) Serum,Mixed Gender","100mL",368,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031G11.01","IPHASE Feline Serum,Single Donor,Male","5mL",63,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031G12.01","IPHASE Feline Serum,Single Donor,Female","5mL",64,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031H13.02","IPHASE Minipig(Bama) Serum,Mixed Gender","50mL",293,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031H13.03","IPHASE Minipig(Bama) Serum,Mixed Gender","100mL",557,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031K13.02","IPHASE Horse Serum,Mixed Gender","50mL",309,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031K13.03","IPHASE Horse Serum,Mixed Gender","100mL",559,"Dry Ice","Blank Serum","Biomaterials and related Products"],
["031Q11.01","IPHASE Duck Serum,Single Donor,Male","5mL",51,"Dry Ice","Blank Serum","Biomaterials and related Products"],

];

const BlankPlasma = [

["032A11.11","IPHASE Human Plasma,Single Donor,Male,EDTA-K2","5ml",9,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032A11.21","IPHASE Human Plasma,Single Donor,Male,Heparin Sodium","5ml",9,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032A12.11","IPHASE Human Plasma,Single Donor,Female,EDTA-K2","5ml",10,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032A12.21","IPHASE Human Plasma,Single Donor,Female,Heparin Sodium","5ml",10,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032A13.15","IPHASE Human Plasma,Mixed Gender,EDTA-K2","10ml",17,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032A13.25","IPHASE Human Plasma,Mixed Gender,Heparin Sodium","10ml",17,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032A13.35","IPHASE Human Plasma,Mixed Gender,Sodium Citrate","10ml",106,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032A13.12","IPHASE Human Plasma,Mixed Gender,EDTA-K2","50ml",65,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032A13.22","IPHASE Human Plasma,Mixed Gender,Heparin Sodium","50ml",65,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032A13.32","IPHASE Human Plasma,Mixed Gender,Sodium Citrate","50ml",65,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032A13.13","IPHASE Human Plasma,Mixed Gender,EDTA-K2","100ml",125,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032A13.23","IPHASE Human Plasma,Mixed Gender,Heparin Sodium","100ml",125,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032A13.33","IPHASE Human Plasma,Mixed Gender,Sodium Citrate","100ml",125,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032A14.12","IPHASE Human Plasma,Mixed Male,EDTA-K2","50ml",65,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032A15.12","IPHASE Human Plasma,Mixed Female,EDTA-K2","50ml",65,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032A14.23","IPHASE Human Plasma,Mixed Male,Heparin Sodium","100ml",125,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032A15.23","IPHASE Human Plasma,Mixed Female,Heparin Sodium","100ml",125,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B11.11","IPHASE Monkey(Cynomolgus) Plasma,Single Donor,Male,EDTA-K2","5ml",150,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B11.21","IPHASE Monkey(Cynomolgus) Plasma,Single Donor,Male,Heparin Sodium","5ml",150,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B11.31","IPHASE Monkey(Cynomolgus) Plasma,Single Donor,Male,Sodium Citrate","5ml",165,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B12.11","IPHASE Monkey(Cynomolgus) Plasma,Single Donor,Female,EDTA-K2","5ml",152,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B12.21","IPHASE Monkey(Cynomolgus) Plasma,Single Donor,Female,Heparin Sodium","5ml",152,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B12.31","IPHASE Monkey(Cynomolgus) Plasma,Single Donor,Female,Sodium Citrate","5ml",169,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B13.15","IPHASE Monkey(Cynomolgus) Plasma,Mixed Gender,EDTA-K2","10ml",298,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B13.25","IPHASE Monkey(Cynomolgus) Plasma,Mixed Gender,Heparin Sodium","10ml",298,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B13.35","IPHASE Monkey(Cynomolgus) Plasma,Mixed Gender,Sodium Citrate","10ml",336,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B13.12","IPHASE Monkey(Cynomolgus) Plasma,Mixed Gender,EDTA-K2","50ml",1498,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B13.22","IPHASE Monkey(Cynomolgus) Plasma,Mixed Gender,Heparin Sodium","50ml",1498,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B13.13","IPHASE Monkey(Cynomolgus) Plasma,Mixed Gender,EDTA-K2","100ml",2998,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B13.23","IPHASE Monkey(Cynomolgus) Plasma,Mixed Gender,Heparin Sodium","100ml",2998,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B13.33","IPHASE Monkey(Cynomolgus) Plasma,Mixed Gender,Sodium Citrate","100ml",4497,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B14.12","IPHASE Monkey(Cynomolgus) Plasma,Mixed Male,EDTA-K2","50ml",1498,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B15.12","IPHASE Monkey(Cynomolgus) Plasma,Mixed Female,EDTA-K2","50ml",1499,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B14.23","IPHASE Monkey(Cynomolgus) Plasma,Mixed Male,Heparin Sodium","100ml",2998,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B15.23","IPHASE Monkey(Cynomolgus) Plasma,Mixed Female,Heparin Sodium","100ml",2999,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B21.11","IPHASE Monkey(Rhesus) Plasma,Single Donor,Male,EDTA-K2","5ml",167,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B21.21","IPHASE Monkey(Rhesus) Plasma,Single Donor,Male,Heparin Sodium","5ml",167,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B22.11","IPHASE Monkey(Rhesus) Plasma,Single Donor,Female,EDTA-K2","5ml",168,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B22.21","IPHASE Monkey(Rhesus) Plasma,Single Donor,Female,Heparin Sodium","5ml",168,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B23.15","IPHASE Monkey(Rhesus) Plasma,Mixed Gender,EDTA-K2","10ml",298,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B23.25","IPHASE Monkey(Rhesus) Plasma,Mixed Gender,Heparin Sodium","10ml",298,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B23.12","IPHASE Monkey(Rhesus) Plasma,Mixed Gender,EDTA-K2","50ml",1498,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B23.22","IPHASE Monkey(Rhesus) Plasma,Mixed Gender,Heparin Sodium","50ml",1498,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B23.13","IPHASE Monkey(Rhesus) Plasma,Mixed Gender,EDTA-K2","100ml",2998,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B23.23","IPHASE Monkey(Rhesus) Plasma,Mixed Gender,Heparin Sodium","100ml",2998,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B24.12","IPHASE Monkey(Rhesus) Plasma,Mixed MaleEDTA-K2","50ml",1498,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032B25.12","IPHASE Monkey(Rhesus) Plasma,Mixed Female,EDTA-K2","50ml",1499,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032C11.11","IPHASE Dog(Beagle) Plasma,Single Donor,Male,EDTA-K2","5ml",45,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032C11.21","IPHASE Dog(Beagle) Plasma,Single Donor,Male,Heparin Sodium","5ml",45,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032C11.31","IPHASE Dog(Beagle) Plasma,Single Donor,Male,Sodium Citrate","5ml",55,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032C12.11","IPHASE Dog(Beagle) Plasma,Single Donor,Female,EDTA-K2","5ml",47,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032C12.21","IPHASE Dog(Beagle) Plasma,Single Donor,Female,Heparin Sodium","5ml",47,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032C13.15","IPHASE Dog(Beagle) Plasma,Mixed Gender,EDTA-K2","10ml",88,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032C13.25","IPHASE Dog(Beagle) Plasma,Mixed Gender,Heparin Sodium","10ml",88,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032C13.35","IPHASE Dog(Beagle) Plasma,Mixed Gender,Sodium Citrate","10ml",132,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032C14.15","IPHASE Dog(Beagle) Plasma,Mixed Male,EDTA-K2","10ml",88,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032C15.15","IPHASE Dog(Beagle) Plasma,Mixed Female,EDTA-K2","10ml",89,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032C13.12","IPHASE Dog(Beagle) Plasma,Mixed Gender,EDTA-K2","50ml",448,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032C13.22","IPHASE Dog(Beagle) Plasma,Mixed Gender,Heparin Sodium","50ml",448,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032C13.32","IPHASE Dog(Beagle) Plasma,Mixed Gender,Sodium Citrate","50ml",672,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032C13.13","IPHASE Dog(Beagle) Plasma,Mixed Gender,EDTA-K2","100ml",980,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032C13.23","IPHASE Dog(Beagle) Plasma,Mixed Gender,Heparin Sodium","100ml",980,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032C13.33","IPHASE Dog(Beagle) Plasma,Mixed Gender,Sodium Citrate","100ml",1470,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032C14.12","IPHASE Dog(Beagle) Plasma,Mixed Male,EDTA-K2","50ml",448,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032C15.12","IPHASE Dog(Beagle) Plasma,Mixed Female,EDTA-K2","50ml",449,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032C14.23","IPHASE Dog(Beagle) Plasma,Mixed Male,Heparin Sodium","100ml",980,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032C15.23","IPHASE Dog(Beagle) Plasma,Mixed Female,Heparin Sodium","100ml",980,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D11.11","IPHASE Rat(Sprague-Dawley) Plasma,Single Donor,Male,EDTA-K2","2ml",7,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D11.21","IPHASE Rat(Sprague-Dawley) Plasma,Single Donor,Male,Heparin Sodium","2ml",7,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D11.31","IPHASE Rat(Sprague-Dawley) Plasma,Single Donor,Male,Sodium Citrate","2ml",10.5,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D12.11","IPHASE Rat(Sprague-Dawley) Plasma,Single Donor,Female,EDTA-K2","2ml",8,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D12.21","IPHASE Rat(Sprague-Dawley) Plasma,Single Donor,Female,Heparin Sodium","2ml",8,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D13.15","IPHASE Rat(Sprague-Dawley) Plasma,Mixed Gender,EDTA-K2","10ml",33,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D13.25","IPHASE Rat(Sprague-Dawley) Plasma,Mixed Gender,Heparin Sodium","10ml",33,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D13.35","IPHASE Rat(Sprague-Dawley) Plasma,Mixed Gender,Sodium Citrate","10ml",72,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D14.15","IPHASE Rat(Sprague-Dawley) Plasma,Mixed Male,EDTA-K2","10ml",33,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D15.15","IPHASE Rat(Sprague-Dawley) Plasma,Mixed Female,EDTA-K2","10ml",33,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D14.25","IPHASE Rat(Sprague-Dawley) Plasma,Mixed Male,Heparin Sodium","10ml",33,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D15.25","IPHASE Rat(Sprague-Dawley) Plasma,Mixed Female,Heparin Sodium","10ml",34,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D13.12","IPHASE Rat(Sprague-Dawley) Plasma,Mixed Gender,EDTA-K2","50ml",163,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D13.22","IPHASE Rat(Sprague-Dawley) Plasma,Mixed Gender,Heparin Sodium","50ml",163,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D13.32","IPHASE Rat(Sprague-Dawley) Plasma,Mixed Gender,Sodium Citrate","50ml",245,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D13.13","IPHASE Rat(Sprague-Dawley) Plasma,Mixed Gender,EDTA-K2","100ml",325,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D13.23","IPHASE Rat(Sprague-Dawley) Plasma,Mixed Gender,Heparin Sodium","100ml",325,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D13.33","IPHASE Rat(Sprague-Dawley) Plasma,Mixed Gender,Sodium Citrate","100ml",488,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D14.12","IPHASE Rat(Sprague-Dawley) Plasma,Mixed Male,EDTA-K2","50ml",163,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D15.12","IPHASE Rat(Sprague-Dawley) Plasma,Mixed Female,EDTA-K2","50ml",164,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D14.13","IPHASE Rat(Sprague-Dawley) Plasma,Mixed Male,EDTA-K2","100ml",325,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D15.13","IPHASE Rat(Sprague-Dawley) Plasma,Mixed Female,EDTA-K2","100ml",326,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D14.23","IPHASE Rat(Sprague-Dawley) Plasma,Mixed Male,Heparin Sodium","100ml",325,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D15.23","IPHASE Rat(Sprague-Dawley) Plasma,Mixed Female,Heparin Sodium","100ml",326,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D21.11","IPHASE Rat(Wistar) Plasma,Male,EDTA-K2","2ml",12,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D21.21","IPHASE Rat(Wistar) Plasma,Male,Heparin Sodium","2ml",12,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D22.11","IPHASE Rat(Wistar) Plasma,Female,EDTA-K2","2ml",13,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D22.21","IPHASE Rat(Wistar) Plasma,Female,Heparin Sodium","2ml",13,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D23.15","IPHASE Rat(Wistar) Plasma,Mixed Gender,EDTA-K2","10ml",58,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D23.25","IPHASE Rat(Wistar) Plasma,Mixed Gender,Heparin Sodium","10ml",58,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D24.15","IPHASE Rat(Wistar) Plasma,Mixed Male,EDTA-K2","10ml",58,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D25.15","IPHASE Rat(Wistar) Plasma,Mixed Female,EDTA-K2","10ml",59,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D24.25","IPHASE Rat(Wistar) Plasma,Mixed Male,Heparin Sodium","10ml",58,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D25.25","IPHASE Rat(Wistar) Plasma,Mixed Female,Heparin Sodium","10ml",59,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D23.12","IPHASE Rat(Wistar) Plasma,Mixed Gender,EDTA-K2","50ml",288,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D24.12","IPHASE Rat(Wistar) Plasma,Mixed Male,EDTA-K2","50ml",288,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D25.12","IPHASE Rat(Wistar) Plasma,Mixed Female,EDTA-K2","50ml",289,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D23.22","IPHASE Rat(Wistar) Plasma,Mixed Gender,Heparin Sodium","50ml",288,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D23.13","IPHASE Rat(Wistar) Plasma,Mixed Gender,EDTA-K2","100ml",576,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D23.23","IPHASE Rat(Wistar) Plasma,Mixed Gender,Heparin Sodium","100ml",576,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D24.13","IPHASE Rat(Wistar) Plasma,Mixed Male,EDTA-K2","100ml",576,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D25.13","IPHASE Rat(Wistar) Plasma,Mixed Female,EDTA-K2","100ml",577,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D24.23","IPHASE Rat(Wistar) Plasma,Mixed Male,Heparin Sodium","100ml",576,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D25.23","IPHASE Rat(Wistar) Plasma,Mixed Female,Heparin Sodium","100ml",577,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D31.11","IPHASE Rat(Wistar Han) Plasma,Single Donor,Male,EDTA-K2","2ml",56,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D32.11","IPHASE Rat(Wistar Han) Plasma,Single Donor,Female,EDTA-K2","2ml",58,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D34.15","IPHASE Rat(Wistar Han) Plasma,Mixed Male,EDTA-K2","10ml",278,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032D33.13","IPHASE Rat(Wistar Han) Plasma,Mixed Gender,EDTA-K2","100ml",2778,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E11.11","IPHASE Mouse(ICR/CD-1) Plasma,Single Donor,Male,EDTA-K2","0.3ml",9,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E11.21","IPHASE Mouse(ICR/CD-1) Plasma,Single Donor,Male,Heparin Sodium","0.3ml",9,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E11.31","IPHASE Mouse(ICR/CD-1) Plasma,Single Donor,Male,Sodium Citrate","0.3ml",13.5,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E12.11","IPHASE Mouse(ICR/CD-1) Plasma,Single Donor,Female,EDTA-K2","0.3ml",10,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E12.21","IPHASE Mouse(ICR/CD-1) Plasma,Single Donor,Female,Heparin Sodium","0.3ml",10,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E13.15","IPHASE Mouse(ICR/CD-1) Plasma,Mixed Gender,EDTA-K2","10ml",33,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E13.25","IPHASE Mouse(ICR/CD-1) Plasma,Mixed Gender,Heparin Sodium","10ml",33,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E13.35","IPHASE Mouse(ICR/CD-1) Plasma,Mixed Gender,Sodium Citrate","10ml",33,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E14.15","IPHASE Mouse(ICR/CD-1) Plasma,Mixed Male,EDTA-K2","10ml",33,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E15.15","IPHASE Mouse(ICR/CD-1) Plasma,Mixed Female,EDTA-K2","10ml",34,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E14.25","IPHASE Mouse(ICR/CD-1) Plasma,Mixed Male,Heparin Sodium","10ml",33,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E15.25","IPHASE Mouse(ICR/CD-1) Plasma,Mixed Female,Heparin Sodium","10ml",34,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E13.12","IPHASE Mouse(ICR/CD-1) Plasma,Mixed Gender,EDTA-K2","50ml",167,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E13.22","IPHASE Mouse(ICR/CD-1) Plasma,Mixed Gender,Heparin Sodium","50ml",167,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E13.32","IPHASE Mouse(ICR/CD-1) Plasma,Mixed Gender,Sodium Citrate","50ml",250,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E14.42","IPHASE Mouse(ICR/CD-1) Plasma,Mixed Male,EDTA-K2","50ml",167,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E13.13","IPHASE Mouse(ICR/CD-1) Plasma,Mixed Gender,EDTA-K2","100ml",340,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E13.23","IPHASE Mouse(ICR/CD-1) Plasma,Mixed Gender,Heparin Sodium","100ml",340,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E14.13","IPHASE Mouse(ICR/CD-1) Plasma,Mixed Male,EDTA-K2","100ml",340,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E15.13","IPHASE Mouse(ICR/CD-1) Plasma,Mixed Female,EDTA-K2","100ml",344,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E14.23","IPHASE Mouse(ICR/CD-1) Plasma,Mixed Male,Heparin Sodium","100ml",340,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E15.23","IPHASE Mouse(ICR/CD-1) Plasma,Mixed Female,Heparin Sodium","100ml",344,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E21.11","IPHASE Mouse(C57BL/6) Plasma,Single Donor,Male,EDTA-K2","0.3ml",13.5,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E21.21","IPHASE Mouse(C57BL/6) Plasma,Single Donor,Male,Heparin Sodium","0.3ml",13.5,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E21.31","IPHASE Mouse(C57BL/6) Plasma,Single Donor,Male,Sodium Citrate","0.3ml","20.25","Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E22.12","IPHASE Mouse(C57BL/6) Plasma,Single Donor,Female,EDTA-K2","0.3ml",15,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E22.22","IPHASE Mouse(C57BL/6) Plasma,Single Donor,Female,Heparin Sodium","0.3ml",15,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E23.11","IPHASE Mouse(C57BL/6) Plasma,Mixed Gender,EDTA-K2","5ml",49.5,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E23.15","IPHASE Mouse(C57BL/6) Plasma,Mixed Gender,EDTA-K2","10ml",140,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E23.25","IPHASE Mouse(C57BL/6) Plasma,Mixed Gender,Heparin Sodium","10ml",140,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E23.45","IPHASE Mouse(C57BL/6) Plasma,Mixed Gender,EDTA-K3","10ml",155,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E23.12","IPHASE Mouse(C57BL/6) Plasma,Mixed Gender,EDTA-K2","50ml",690,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E23.22","IPHASE Mouse(C57BL/6) Plasma,Mixed Gender,Heparin Sodium","50ml",690,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E23.32","IPHASE Mouse(C57BL/6) Plasma,Mixed Gender,EDTA-K3","50ml",1035,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E23.13","IPHASE Mouse(C57BL/6) Plasma,Mixed Gender,EDTA-K2","100ml",1375,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E23.23","IPHASE Mouse(C57BL/6) Plasma,Mixed Gender,Heparin Sodium","100ml",1375,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E23.33","IPHASE Mouse(C57BL/6) Plasma,Mixed Gender,EDTA-K3","100ml",2060,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E41.11","IPHASE Mouse(BALB/c) Plasma,Single Donor,Male,EDTA-K2","0.3ml",14,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E42.11","IPHASE Mouse(BALB/c) Plasma,Single Donor,Female,EDTA-K2","0.3ml",14,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E45.15","IPHASE Mouse(BALB/c) Plasma,Mixed Female,EDTA-K2","10ml",140,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E43.15","IPHASE Mouse(BALB/c) Plasma,Mixed Gender,EDTA-K2","10ml",139,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E43.25","IPHASE Mouse(BALB/c) Plasma,Mixed Gender,Heparin Sodium","10ml",139,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E53.14","IPHASE Mouse(Nu/Nu) Plasma,Mixed Female,EDTA-K2","1ml",139,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E61.11","IPHASE Mouse(BALB/c nude) Plasma,Single Donor,Male,EDTA-K2","0.3ml",15,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E63.15","IPHASE Mouse(BALB/c nude) Plasma,Mixed Gender,EDTA-K2","10ml",389,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032E63.25","IPHASE (BALB/c nude) Plasma,Mixed Gender,Heparin Sodium","10ml",389,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032G13.12","IPHASE Feline Plasma,Mixed Gender,EDTA-K2","50ml",1947,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032G13.15","IPHASE Feline Plasma,Mixed Gender,EDTA-K2","10ml",399,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032G13.25","IPHASE Feline Plasma,Mixed Gender,Heparin Sodium","10ml",399,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032G13.13","IPHASE Feline Plasma,Mixed Gender,EDTA-K2","100ml",3988,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032H13.12","IPHASE Minipig(Bama) Plasma,Mixed Gender,EDTA-K2","50ml",293,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032H13.15","IPHASE Minipig(Bama) Plasma,Mixed Gender,EDTA-K2","10ml",59,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032H13.25","IPHASE Minipig(Bama) Plasma,Mixed Gender,Heparin Sodium","10ml",59,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032H13.35","IPHASE Minipig(Bama) Plasma,Mixed Gender,Sodium Citrate","10ml",88,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032H13.22","IPHASE Minipig(Bama) Plasma,Mixed Gender,Heparin Sodium","50ml",438,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032H13.23","IPHASE Minipig(Bama) Plasma,Mixed Gender,Heparin Sodium","100ml",878,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032H13.33","IPHASE Minipig(Bama) Plasma,Mixed Gender,Sodium Citrate","100ml",878,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032I11.11","IPHASE Rabbit(New Zealand White) Plasma,Single Donor,Male,EDTA-K2","5ml",18,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032I11.21","IPHASE Rabbit(New Zealand White) Plasma,Single Donor,Male,Heparin Sodium","5ml",18,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032I11.31","IPHASE Rabbit(New Zealand White) Plasma,Single Donor,Male,Sodium Citrate","5ml",27,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032I12.11","IPHASE Rabbit(New Zealand White) Plasma,Single Donor,Female,EDTA-K2","5ml",19,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032I12.21","IPHASE Rabbit(New Zealand White) Plasma,Single Donor,Female,Heparin Sodium","5ml",19,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032I13.15","IPHASE Rabbit(New Zealand White) Plasma,Mixed Gender,EDTA-K2","10ml",35,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032I13.25","IPHASE Rabbit(New Zealand White) Plasma,Mixed Gender,Heparin Sodium","10ml",35,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032I13.35","IPHASE Rabbit(New Zealand White) Plasma,Mixed Gender,Sodium Citrate","10ml",52,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032I15.13","IPHASE Rabbit(New Zealand White) Plasma,Mixed Female,EDTA-K2","100ml",407,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032I13.12","IPHASE Rabbit(New Zealand White) Plasma,Mixed Gender,EDTA-K2","50ml",204,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032I13.22","IPHASE Rabbit(New Zealand White) Plasma,Mixed Gender,Heparin Sodium","50ml",204,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032I13.13","IPHASE Rabbit(New Zealand White) Plasma,Mixed Gender,EDTA-K2","100ml",349,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032I13.23","IPHASE Rabbit(New Zealand White) Plasma,Mixed Gender,Heparin Sodium","100ml",349,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032I13.33","IPHASE Rabbit(New Zealand White) Plasma,Mixed Gender,Sodium Citrate","100ml",524,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032I21.11","IPHASE Rabbit(Japanese White) Plasma,Single Donor,Male,EDTA-K2","5ml",20,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032I21.21","IPHASE Rabbit(Japanese White) Plasma,Single Donor,Male,Heparin Sodium","5ml",21,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032I22.11","IPHASE Rabbit(Japanese White) Plasma,Single Donor,Female,EDTA-K2","5ml",21,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032I22.21","IPHASE Rabbit(Japanese White) Plasma,Single Donor,Female,Heparin Sodium","5ml",21,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032I23.15","IPHASE Rabbit(Japanese White) Plasma,Mixed Gender,EDTA-K2","10ml",39,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032I23.25","IPHASE Rabbit(Japanese White) Plasma,Mixed Gender,Heparin Sodium","10ml",39,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032I23.12","IPHASE Rabbit(Japanese White) Plasma,Mixed Gender,EDTA-K2","50ml",188,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032I23.22","IPHASE Rabbit(Japanese White) Plasma,Mixed Gender,Heparin Sodium","50ml",188,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032I23.13","IPHASE Rabbit(Japanese White) Plasma,Mixed Gender,EDTA-K2","100ml",368,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032I23.23","IPHASE Rabbit(Japanese White) Plasma,Mixed Gender,Heparin Sodium","100ml",368,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032J13.13","IPHASE Bovine Plasma,Mixed Gender,EDTA-K2","100ml",556,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
["032J13.15","IPHASE Bovine Plasma,Mixed Gender,EDTA-K2","10ml",57,"Dry Ice","Blank Plasma","Biomaterials and related Products"],
];

const BlankBile = [
["034B11.01","IPHASE Monkey(Cynomolgus) Bile,Single Donor,Male","2mL",228,"Dry Ice","Blank Bile","Biomaterials and related Products"],
["034B12.01","IPHASE Monkey(Cynomolgus) Bile,Single Donor,Female","2mL",238,"Dry Ice","Blank Bile","Biomaterials and related Products"],
["034B13.02","IPHASE Monkey(Cynomolgus) Bile,Mixed Gender","10mL",1050,"Dry Ice","Blank Bile","Biomaterials and related Products"],
["034C11.01","IPHASE Dog(Beagle) Bile,Single Donor,Male","2mL",58,"Dry Ice","Blank Bile","Biomaterials and related Products"],
["034C12.01","IPHASE Dog(Beagle) Bile,Single Donor,Female","2mL",62,"Dry Ice","Blank Bile","Biomaterials and related Products"],
["034C13.02","IPHASE Dog(Beagle) Bile,Mixed Gender","10mL",295,"Dry Ice","Blank Bile","Biomaterials and related Products"],
["034D11.01","IPHASE Rat(Sprague-Dawley) Bile,Single Donor,Male","1mL",31,"Dry Ice","Blank Bile","Biomaterials and related Products"],
["034D12.01","IPHASE Rat(Sprague-Dawley) Bile,Single Donor,Female","1mL",33,"Dry Ice","Blank Bile","Biomaterials and related Products"],
["034D13.02","IPHASE Rat(Sprague-Dawley) Bile,Mixed Gender","10mL",305,"Dry Ice","Blank Bile","Biomaterials and related Products"]
];

const BlankLiverTissue = [
["036B11.03","IPHASE Monkey(Cynomolgus) Liver Tissue,Male","5g",306,"Dry Ice","Blank Liver Tissue","Biomaterials and related Products"],
["036B12.03","IPHASE Monkey(Cynomolgus) Liver Tissue,Female","5g",361,"Dry Ice","Blank Liver Tissue","Biomaterials and related Products"],
["036B21.03","IPHASE Monkey(Rhesus) Liver Tissue,Male","5g",306,"Dry Ice","Blank Liver Tissue","Biomaterials and related Products"],
["036C13.13","IPHASE Dog(Beagle) Liver Tissue,Male","10g",69,"Dry Ice","Blank Liver Tissue","Biomaterials and related Products"],
["036C12.03","IPHASE Dog(Beagle) Liver Tissue,Female","10g",83,"Dry Ice","Blank Liver Tissue","Biomaterials and related Products"],
["036D11.03","IPHASE Rat(Sprague-Dawley) Liver Tissue,Male","2g",28,"Dry Ice","Blank Liver Tissue","Biomaterials and related Products"],
["036D12.03","IPHASE Rat(Sprague-Dawley) Liver Tissue,Female","2g",32,"Dry Ice","Blank Liver Tissue","Biomaterials and related Products"],
["036E11.03","IPHASE Mouse(ICR/CD-1) Liver Tissue,Male","1g",11,"Dry Ice","Blank Liver Tissue","Biomaterials and related Products"],
["036E12.03","IPHASE Mouse(ICR/CD-1) Liver Tissue,Female","1g",14,"Dry Ice","Blank Liver Tissue","Biomaterials and related Products"],
["036H11.02","IPHASE Minipig(Bama) Liver Tissue,Male","10g",69,"Dry Ice","Blank Liver Tissue","Biomaterials and related Products"],
["036H12.03","IPHASE Minipig(Bama) Liver Tissue,Female","10g",83,"Dry Ice","Blank Liver Tissue","Biomaterials and related Products"],
["036H11.00","IPHASE Minipig(Bama) Kidney Tissue,Homogenate,Male,1:4","5mL(1:4)",111,"Dry Ice","Blank Liver Tissue","Biomaterials and related Products"],

];

const AlternativeBiologicalMatrix = [
["38011.01","IPHASE Artificial Simulation Plasma","100mL",87,"Dry Ice","Alternative Biological Matrix","Biomaterials and related Products"],
["38012.01","IPHASE Artificial Simulation Plasma, BSA","100mL",135,"Dry Ice","Alternative Biological Matrix","Biomaterials and related Products"],
["38021.01","IPHASE Artificial Simulation Urine","100mL",38,"Dry Ice","Alternative Biological Matrix","Biomaterials and related Products"],
["38021.02","IPHASE Artificial Simulation Urine","500mL",85,"Dry Ice","Alternative Biological Matrix","Biomaterials and related Products"],
["38031.01","IPHASE Artificial Simulation Saliva","100mL",38,"Dry Ice","Alternative Biological Matrix","Biomaterials and related Products"],
["38031.02","IPHASE Artificial Simulation Saliva","500mL",115,"Dry Ice","Alternative Biological Matrix","Biomaterials and related Products"],
["38041.01","IPHASE Artificial Sweat, Alkaline","100mL",21,"Dry Ice","Alternative Biological Matrix","Biomaterials and related Products"],
["38041.02","IPHASE Artificial Sweat, Alkaline","500mL",65,"Dry Ice","Alternative Biological Matrix","Biomaterials and related Products"],
["38051.01","IPHASE Artificial Gastric Juice","100mL",33,"Dry Ice","Alternative Biological Matrix","Biomaterials and related Products"],
["38051.02","IPHASE Artificial Gastric Juice","500mL",99,"Dry Ice","Alternative Biological Matrix","Biomaterials and related Products"],
["38061.01","IPHASE Artificial Simulation Intestinal Juice","100mL",25,"Dry Ice","Alternative Biological Matrix","Biomaterials and related Products"],
["38061.02","IPHASE Artificial Simulation Intestinal Juice","500mL",85,"Dry Ice","Alternative Biological Matrix","Biomaterials and related Products"],
["38071.01","IPHASE Artificial Colon Juice","100mL",24,"Dry Ice","Alternative Biological Matrix","Biomaterials and related Products"],
["38071.02","IPHASE Artificial Colon Juice","500mL",57,"Dry Ice","Alternative Biological Matrix","Biomaterials and related Products"],
["38081.01","IPHASE Artificial Colon Juice, Ammonia","100mL",25,"Dry Ice","Alternative Biological Matrix","Biomaterials and related Products"],
["38081.02","IPHASE Artificial Colon Juice, Ammonia","500mL",65,"Dry Ice","Alternative Biological Matrix","Biomaterials and related Products"],
["38091.01","IPHASE Artificial Pig Gastric Juice","100mL",57,"Dry Ice","Alternative Biological Matrix","Biomaterials and related Products"],
["38091.02","IPHASE Artificial Pig Gastric Juice","500mL",265,"Dry Ice","Alternative Biological Matrix","Biomaterials and related Products"],
["38102.01","IPHASE Artificial Whole Blood, Vitamins-free","100mL",557,"Dry Ice","Alternative Biological Matrix","Biomaterials and related Products"],
["38103.01","IPHASE Artificial Whole Blood","100mL",279,"Dry Ice","Alternative Biological Matrix","Biomaterials and related Products"],
["38104.01","IPHASE Matrix solution","100mL",279,"Dry Ice","Alternative Biological Matrix","Biomaterials and related Products"],
["38111.01","IPHASE Artificial Cerebrospinal Fluid","100mL",97,"Dry Ice","Alternative Biological Matrix","Biomaterials and related Products"],
["38121.01","IPHASE Artificial Simulation Serum","100mL",72,"Dry Ice","Alternative Biological Matrix","Biomaterials and related Products"],
["38131.01","IPHASE Artificial Aqueous Fluid","50mL",102,"Dry Ice","Alternative Biological Matrix","Biomaterials and related Products"],
];

const VitreousHumor = [
["039B11.11", "IPHASE Monkey (Cynomolgus) Vitreous Humor, Male", "1mL", "398", "Dry Ice", "Vitreous Humor", "Biomaterials and related Products"],
["039B11.12", "IPHASE Monkey (Cynomolgus) Vitreous Humor, Female", "1mL", "418", "Dry Ice", "Vitreous Humor", "Biomaterials and related Products"],
["039I11.11", "IPHASE Rabbit (New Zealand White) Vitreous Humor, Male", "1mL", "36", "Dry Ice", "Vitreous Humor", "Biomaterials and related Products"],
["039I11.12", "IPHASE Rabbit (New Zealand White) Vitreous Humor, Female", "1mL", "38", "Dry Ice", "Vitreous Humor", "Biomaterials and related Produvts"],
];

const BlankAqueousFluid = [
 ["0317B11.21", "IPHASE Monkey (Cynomolgus) Aqueous Fluid, Male", "1mL", "695", "Dry Ice", "Blank Aqueous Fluid", "Biomaterials and related Products"],
  ["0317I11.11", "IPHASE Rabbit (New Zealand White) Aqueous Fluid, Male", "0.2mL", "25", "Dry Ice", "Blank Aqueous Fluid", "Biomaterials and related Products"],
  ["0317I11.12", "IPHASE Rabbit (New Zealand White) Aqueous Fluid, Female", "0.2mL", "27", "Dry Ice", "Blank Aqueous Fluid", "Biomaterials and related Products"],
  ["0317I11.21", "IPHASE Rabbit (New Zealand White) Aqueous Fluid, Male", "1mL", "65", "Dry Ice", "Blank Aqueous Fluid", "Biomaterials and related Products"],
  ["0317I11.22", "IPHASE Rabbit (New Zealand White) Aqueous Fluid, Female", "1mL", "67", "Dry Ice", "Blank Aqueous Fluid", "Biomaterials and related Products"],
  ["0317I11.23", "IPHASE Rabbit (New Zealand White) Aqueous Fluid", "1mL", "66", "Dry Ice", "Blank Aqueous Fluid", "Biomaterials and related Products"],

  ];

const Marrow = [
["0318I11.31", "IPHASE Rabbit (New Zealand White) Marrow, Male", "1g", "45", "Dry Ice", "Marrow", "Biomaterials and related Products"],
  ["0318I11.32", "IPHASE Rabbit (New Zealand White) Marrow, Female", "1g", "49", "Dry Ice", "Marrow", "Biomaterials and related Products"],
  ["0318B11.31", "IPHASE Monkey (Cynomolgus) Marrow, Male", "1g", "450", "Dry Ice", "Marrow", "Biomaterials and related Products"],
  ["0318C11.31", "IPHASE Dog (Beagle) Marrow, Male", "1g", "55", "Dry Ice", "Marrow", "Biomaterials and related Products"],
  
  ];

const Milk = [
["0319D11.42", "IPHASE Rat (Sprague-Dawley) Milk, Female", "1mL", "195", "Dry Ice", "Milk", "Biomaterials and related Products"],
];

const CerebrospinalFluid = [
["0320B11.51", "IPHASE Monkey (Cynomolgus) Cerebrospinal Fluid, Male", "1mL", "248", "Dry Ice", "Cerebrospinal Fluid", "Biomaterials and related Products"],
  ["0320B11.52", "IPHASE Monkey (Cynomolgus) Cerebrospinal Fluid, Female", "1mL", "258", "Dry Ice", "Cerebrospinal Fluid", "Biomaterials and related Products"],
  ["0320B11.53", "IPHASE Monkey (Cynomolgus) Cerebrospinal Fluid, Mixed Gender", "1mL", "253", "Dry Ice", "Cerebrospinal Fluid", "Biomaterials and related Products"],
  ["0320B21.51", "IPHASE Monkey (Rhesus) Cerebrospinal Fluid, Male", "1mL", "420", "Dry Ice", "Cerebrospinal Fluid", "Biomaterials and related Products"],
  ["0320B21.52", "IPHASE Monkey (Rhesus) Cerebrospinal Fluid, Female", "1mL", "450", "Dry Ice", "Cerebrospinal Fluid", "Biomaterials and related Products"],
  ["0320C11.51", "IPHASE Dog (Beagle) Cerebrospinal Fluid, Male", "1mL", "167", "Dry Ice", "Cerebrospinal Fluid", "Biomaterials and related Products"],
  ["0320C11.52", "IPHASE Dog (Beagle) Cerebrospinal Fluid, Female", "1mL", "176", "Dry Ice", "Cerebrospinal Fluid", "Biomaterials and related Products"],
  ["0320D11.51", "IPHASE Rat (Sprague-Dawley) Cerebrospinal Fluid, Male", "1mL", "182", "Dry Ice", "Cerebrospinal Fluid", "Biomaterials and related Products"],
  ["0320D11.52", "IPHASE Rat (Sprague-Dawley) Cerebrospinal Fluid, Female", "1mL", "192", "Dry Ice", "Cerebrospinal Fluid", "Biomaterials and related Products"],
  ["0320H11.51", "IPHASE Minipig (Bama) Cerebrospinal Fluid, Male", "1mL", "255", "Dry Ice", "Cerebrospinal Fluid", "Biomaterials and related Products"],

];

const SterileProduct = [
["0328A13.11", "IPHASE Sterile Human Plasma, Mixed Gender, EDTA-K2", "5mL", "70", "Dry Ice", "Sterile product", "Biomaterials and related Products"],
  ["0328A13.16", "IPHASE Sterile Human Plasma, Mixed Gender, EDTA-K2", "1mL", "15", "Dry Ice", "Sterile product", "Biomaterials and related Products"],
  ["0328A13.26", "IPHASE Sterile Human Plasma, Mixed Gender, Heparin Sodium", "1mL", "15", "Dry Ice", "Sterile product", "Biomaterials and related Products"],
  ["0328B13.11", "IPHASE Sterile Monkey (Cynomolgus) Plasma, Mixed Gender, EDTA-K2", "5mL", "251", "Dry Ice", "Sterile product", "Biomaterials and related Products"],
  ["0328B13.16", "IPHASE Sterile Monkey (Cynomolgus) Plasma, Mixed Gender, EDTA-K2", "1mL", "55", "Dry Ice", "Sterile product", "Biomaterials and related Products"],
  ["0328B13.26", "IPHASE Sterile Monkey (Cynomolgus) Plasma, Mixed Gender, Heparin Sodium", "1mL", "55", "Dry Ice", "Sterile product", "Biomaterials and related Products"],
  ["0328C13.11", "IPHASE Sterile Dog (Beagle) Plasma, Mixed Gender, EDTA-K2", "5mL", "49", "Dry Ice", "Sterile product", "Biomaterials and related Products"],
  ["0328D13.11", "IPHASE Sterile Rat (Sprague-Dawley) Plasma, Mixed Gender, EDTA-K2", "5mL", "45", "Dry Ice", "Sterile product", "Biomaterials and related Products"],
  ["0328D13.16", "IPHASE Sterile Rat (Sprague-Dawley) Plasma, Mixed Gender, EDTA-K2", "1mL", "9", "Dry Ice", "Sterile product", "Biomaterials and related Products"],
  ["0328D13.26", "IPHASE Sterile Rat (Sprague-Dawley) Plasma, Mixed Gender, Heparin Sodium", "1mL", "9", "Dry Ice", "Sterile product", "Biomaterials and related Products"],
  ["0328D13.06", "IPHASE Sterile Rat (Sprague-Dawley) Serum, Mixed Gender", "1mL", "9", "Dry Ice", "Sterile product", "Biomaterials and related Products"],
  ["0328E13.11", "IPHASE Sterile Mouse (ICR/CD-1) Plasma, Mixed Gender, EDTA-K2", "5mL", "51", "Dry Ice", "Sterile product", "Biomaterials and related Products"],
  ["0328E13.16", "IPHASE Sterile Mouse (ICR/CD-1) Plasma, Mixed Gender, EDTA-K2", "1mL", "8", "Dry Ice", "Sterile product", "Biomaterials and related Products"],
  ["0328E13.26", "IPHASE Sterile Mouse (ICR/CD-1) Plasma, Mixed Gender, Heparin Sodium", "1mL", "8", "Dry Ice", "Sterile product", "Biomaterials and related Products"],
  ["0328E23.06", "IPHASE Sterile Mouse (C57BL/6) Serum, Mixed Gender", "1mL", "18", "Dry Ice", "Sterile product", "Biomaterials and related Products"],
  ];

 const OrganizationalHomogenizationProducts = [
  ["0330A10.021", "IPHASE Human Liver Homogenate, 1:4", "10mL", "612", "Dry Ice", "Organizational Homogenization Products", "Biomaterials and related Products"],
  ["0330A10.022", "IPHASE Human Liver Homogenate, 1:9", "10mL", "348", "Dry Ice", "Organizational Homogenization Products", "Biomaterials and related Products"],
  ["0330A13.97", "IPHASE Human Lung Homogenate, Mixed Gender", "5mL, 0.2g/mL", "695", "Dry Ice", "Organizational Homogenization Products", "Biomaterials and related Products"],
  ["0330B11.02", "IPHASE Monkey (Cynomolgus) Liver Homogenate, Male", "10mL", "67", "Dry Ice", "Organizational Homogenization Products", "Biomaterials and related Products"],
  ["0330B11.22", "IPHASE Monkey (Cynomolgus) Pancreas Homogenate, Male", "10mL", "70", "Dry Ice", "Organizational Homogenization Products", "Biomaterials and related Products"],
  ["0330B11.32", "IPHASE Monkey (Cynomolgus) Kidney Homogenate, Male", "10mL", "72", "Dry Ice", "Organizational Homogenization Products", "Biomaterials and related Products"],
  ["0330B11.72", "IPHASE Monkey (Cynomolgus) Heart Homogenate, Male", "10mL", "92", "Dry Ice", "Organizational Homogenization Products", "Biomaterials and related Products"],
  ["0330B11.82", "IPHASE Monkey (Cynomolgus) Spleen Homogenate, Male", "10mL", "71", "Dry Ice", "Organizational Homogenization Products", "Biomaterials and related Products"],
  ["0330B11.92", "IPHASE Monkey (Cynomolgus) Lung Homogenate, Male", "10mL", "120", "Dry Ice", "Organizational Homogenization Products", "Biomaterials and related Products"],
  ["0330B11.102", "IPHASE Monkey (Cynomolgus) Brain Homogenate, Male", "10mL", "36", "Dry Ice", "Organizational Homogenization Products", "Biomaterials and related Products"],
 ];


const HumanTissue = [
  ["04A1070","IPHASE Human Adrenal Tissue Block","1 g",456,"Dry Ice","Forzen","Human Tissue"],
  ["04A1090","IPHASE Human Bladder Tissue Block","1 g",456,"Dry Ice","Forzen","Human Tissue"],
  ["04A1100","IPHASE Human Bone Marrow Smear","1 slide",392,"Dry Ice","Forzen","Human Tissue"],
  ["04A1110","IPHASE Human Breast Tissue Block","1 g",377,"Dry Ice","Forzen","Human Tissue"],
  ["04A1040-C","IPHASE Human Cerebellar Tissue Block","1 g",329,"Dry Ice","Forzen","Human Tissue"],
  ["04A1040-B","IPHASE Human Brain Tissue Block","1 g",387,"Dry Ice","Forzen","Human Tissue"],
  ["04A1050-A","IPHASE Human Colon Tissue Block","1 g",377,"Dry Ice","Forzen","Human Tissue"],
  ["04A1120","IPHASE Human Endothelium Tissue Block","1 g",566,"Dry Ice","Forzen","Human Tissue"],
  ["04A1130","IPHASE Human Eye Tissue Block","1 g",598,"Dry Ice","Forzen","Human Tissue"],
  ["04A1140","IPHASE Human Fallopian Tube Tissue Block","1 g",458,"Dry Ice","Forzen","Human Tissue"],
  ["04A1290","IPHASE Human Gastric Tissue Block","1 g",458,"Dry Ice","Forzen","Human Tissue"],
  ["04A1060","IPHASE Human Heart Tissue Block","1 g",377,"Dry Ice","Forzen","Human Tissue"],
  ["04A1060-A","IPHASE Human Right Ventricular Tissue Block","1 g",377,"Dry Ice","Forzen","Human Tissue"],
  ["04A1060-B","IPHASE Human Left Ventricular Tissue Block","1 g",377,"Dry Ice","Forzen","Human Tissue"],
  ["04A1030","IPHASE Human Kidney Tissue Block","1 g",377,"Dry Ice","Forzen","Human Tissue"],
  ["04A1010","IPHASE Human Liver Tissue Block","1 g",377,"Dry Ice","Forzen","Human Tissue"],
  ["04A1020","IPHASE Human Lung Tissue Block","1 g",377,"Dry Ice","Forzen","Human Tissue"],
  ["04A1160","IPHASE Human Lymph Node Tissue Block","1 g",485,"Dry Ice","Forzen","Human Tissue"],
  ["04A1170","IPHASE Human Ovary Tissue Block","1 g",660,"Dry Ice","Forzen","Human Tissue"],
  ["04A1280","IPHASE Human Pancreas Tissue Block","1 g",603,"Dry Ice","Forzen","Human Tissue"],
  ["04A1180-B","IPHASE Human Thyroid(With Parathyroid) Tissue Block","1 g",997,"Dry Ice","Forzen","Human Tissue"],
  ["04A1190","IPHASE Human Pituitary Tissue Block","1 block",858.8,"Dry Ice","Forzen","Human Tissue"],
  ["04A1200","IPHASE Human Placenta Tissue Block","1 g",605,"Dry Ice","Forzen","Human Tissue"],
  ["04A1210","IPHASE Human Prostate Tissue Block","1 g",458,"Dry Ice","Forzen","Human Tissue"],
  ["04A1220","IPHASE Human Skin Tissue Block","1 g",458,"Dry Ice","Forzen","Human Tissue"],
  ["04A1230","IPHASE Human Spinal Cord Tissue Block","1 g",653,"Dry Ice","Forzen","Human Tissue"],
  ["04A1080","IPHASE Human Spleen Tissue Block","1 g",377,"Dry Ice","Forzen","Human Tissue"],
  ["04A1310","IPHASE Human Skeletal Muscle Tissue Block","1 g",458,"Dry Ice","Forzen","Human Tissue"],
  ["04A1310-A","IPHASE Human Transverse Skeletal Muscle Tissue Block","1 g",458,"Dry Ice","Forzen","Human Tissue"],
  ["04A1310-B","IPHASE Human Longitudinal Skeletal Muscle Tissue Block","1 g",458,"Dry Ice","Forzen","Human Tissue"],
  ["04A1240","IPHASE Human Testis Tissue Block","1 g",458,"Dry Ice","Forzen","Human Tissue"],
  ["04A1250","IPHASE Human Thymus Tissue Block","1 g",485,"Dry Ice","Forzen","Human Tissue"],
  ["04A1180-A","IPHASE Human Thyroid Tissue Block","1 g",660,"Dry Ice","Forzen","Human Tissue"],
  ["04A1260","IPHASE Human Ureter Tissue Block","1 g",458,"Dry Ice","Forzen","Human Tissue"],
  ["04A1270","IPHASE Human Uterus Tissue Block","1 g",485,"Dry Ice","Forzen","Human Tissue"],
  ["04A1270-A","IPHASE Human Cervical Tissue Block","1 g",485,"Dry Ice","Forzen","Human Tissue"],
  ["04A1270-B","IPHASE Human Endometrial Tissue Block","1 g",458,"Dry Ice","Forzen","Human Tissue"],
  ["04A1040-A","IPHASE Human Whole Brain Tissue Block","1 g",387,"Dry Ice","Forzen","Human Tissue"],
  ["","IPHASE Human Brainstem Tissue Block","1 g",458,"Dry Ice","Forzen","Human Tissue"],
  ["04A1050-B","IPHASE Human Ileal Tissue Block","1 g",377,"Dry Ice","Forzen","Human Tissue"],
  ["04A1050-C","IPHASE Human Cecal Tissue Block","1 g",378,"Dry Ice","Forzen","Human Tissue"],
  ["04A1050-D","IPHASE Human Jejunal Tissue Block","1 g",379,"Dry Ice","Forzen","Human Tissue"],
  ["04A1050-E","IPHASE Human Rectal Tissue Block","1 g",380,"Dry Ice","Forzen","Human Tissue"],
  ["04A1050-F","IPHASE Human Duodenal Tissue Block","1 g",381,"Dry Ice","Forzen","Human Tissue"],
  ["04A1150","IPHASE Human Gastrointestinal Tract Tissue Block","1 g",458,"Dry Ice","Forzen","Human Tissue"],
  ["04A1300","IPHASE Human Tonsil Tissue Block","1 个",982,"Dry Ice","Forzen","Human Tissue"],
  ["04A1320","IPHASE Human Salivary Gland Tissue Block","1 g",987,"Dry Ice","Forzen","Human Tissue"],
  ["04A1320-A","IPHASE Human Submandibular Gland Tissue Block","1 g",992,"Dry Ice","Forzen","Human Tissue"],
  ["04A1320-B","IPHASE Human Parotid Gland Tissue Block","1 g",659,"Dry Ice","Forzen","Human Tissue"],
  ["04A1340","IPHASE Human Sciatic Nerve","1 g",662,"Dry Ice","Forzen","Human Tissue"],
  ["04A1350","IPHASE Human Esophageal Tissue Block","1 g",487,"Dry Ice","Forzen","Human Tissue"],
  ];

const Paraffin = [
  ["04A1071","IPHASE Human Adrenal Paraffin Tissue Block","1 block",456,"Room Temp","Forzen","Paraffin"],
  ["04A1091","IPHASE Human Bladder Paraffin Tissue Block","1 block",456,"Room Temp","Forzen","Paraffin"],
  ["04A1101","IPHASE Human Bone Marrow Paraffin Tissue Block","1 block",392,"Room Temp","Forzen","Paraffin"],
  ["04A1111","IPHASE Human Breast Paraffin Tissue Block","1 block",377,"Room Temp","Forzen","Paraffin"],
  ["04A1041-C","IPHASE Human Cerebellar Paraffin Tissue Block","1 block",329,"Room Temp","Forzen","Paraffin"],
  ["04A1041-B","IPHASE Human Brain Paraffin Tissue Block","1 block",387,"Room Temp","Forzen","Paraffin"],
  ["04A1051-A","IPHASE Human Colon Paraffin Tissue Block","1 block",377,"Room Temp","Forzen","Paraffin"],
  ["04A1121","IPHASE Human Endothelium Paraffin Tissue Block","1 block",566,"Room Temp","Forzen","Paraffin"],
  ["04A1131","IPHASE Human Eye Paraffin Tissue Block","1 block",598,"Room Temp","Forzen","Paraffin"],
  ["04A1141","IPHASE Human Fallopian Tube Paraffin Tissue Block","1 block",458,"Room Temp","Forzen","Paraffin"],
  ["04A1291","IPHASE Human Gastric Paraffin Tissue Block","1 block",458,"Room Temp","Forzen","Paraffin"],
  ["04A1061","IPHASE Human Heart Paraffin Tissue Block","1 block",377,"Room Temp","Forzen","Paraffin"],
  ["04A1061-A","IPHASE Human Right Ventricular Paraffin Tissue Block","1 block",377,"Room Temp","Forzen","Paraffin"],
  ["04A1061-B","IPHASE Human Left Ventricular Paraffin Tissue Block","1 block",377,"Room Temp","Forzen","Paraffin"],
  ["04A1061-C","IPHASE Human Left Atrial Paraffin Tissue Block","1 block",377,"Room Temp","Forzen","Paraffin"],
  ["04A1061-D","IPHASE Human Right Atrial Paraffin Tissue Block","1 block",377,"Room Temp","Forzen","Paraffin"],
  ["04A1031","IPHASE Human Kidney Paraffin Tissue Block","1 block",377,"Room Temp","Forzen","Paraffin"],
  ["04A1011","IPHASE Human Liver Paraffin Tissue Block","1 block",377,"Room Temp","Forzen","Paraffin"],
  ["04A1021","IPHASE Human Lung Paraffin Tissue Block","1 block",377,"Room Temp","Forzen","Paraffin"],
  ["04A1161","IPHASE Human Lymph Node Paraffin Tissue Block","1 block",485,"Room Temp","Forzen","Paraffin"],
  ["04A1171","IPHASE Human Ovary Paraffin Tissue Block","1 block",660,"Room Temp","Forzen","Paraffin"],
  ["04A1281","IPHASE Human Pancreas Paraffin Tissue Block","1 block",603,"Room Temp","Forzen","Paraffin"],
  ["04A1181-B","IPHASE Human Thyroid(With Parathyroid) Paraffin Tissue Block","1 block",997,"Room Temp","Forzen","Paraffin"],
  ["04A1191","IPHASE Human Pituitary Paraffin Tissue Block","1 block",858.8,"Room Temp","Forzen","Paraffin"],
  ["04A1201","IPHASE Human Placenta Paraffin Tissue Block","1 block",605,"Room Temp","Forzen","Paraffin"],
  ["04A1211","IPHASE Human Prostate Paraffin Tissue Block","1 block",458,"Room Temp","Forzen","Paraffin"],
  ["04A1221","IPHASE Human Skin Paraffin Tissue Block","1 block",458,"Room Temp","Forzen","Paraffin"],
  ["04A1231","IPHASE Human Spinal Cord Paraffin Tissue Block","1 block",653,"Room Temp","Forzen","Paraffin"],
  ["04A1081","IPHASE Human Spleen Paraffin Tissue Block","1 block",377,"Room Temp","Forzen","Paraffin"],
  ["04A1311","IPHASE Human Skeletal Muscle Paraffin Tissue Block","1 block",458,"Room Temp","Forzen","Paraffin"],
  ["04A1311-A","IPHASE Human Transverse Skeletal Muscle Paraffin Tissue Block","1 block",458,"Room Temp","Forzen","Paraffin"],
  ["04A1311-B","IPHASE Human Longitudinal Skeletal Muscle Paraffin Tissue Block","1 block",458,"Room Temp","Forzen","Paraffin"],
  ["04A1241","IPHASE Human Testis Paraffin Tissue Block","1 block",458,"Room Temp","Forzen","Paraffin"],
  ["04A1251","IPHASE Human Thymus Paraffin Tissue Block","1 block",485,"Room Temp","Forzen","Paraffin"],
  ["04A1181-A","IPHASE Human Thyroid Paraffin Tissue Block","1 block",660,"Room Temp","Forzen","Paraffin"],
  ["04A1261","IPHASE Human Ureter Paraffin Tissue Block","1 block",458,"Room Temp","Forzen","Paraffin"],
  ["04A1271","IPHASE Human Uterus Paraffin Tissue Block","1 block",485,"Room Temp","Forzen","Paraffin"],
  ["04A1271-A","IPHASE Human Cervical Paraffin Tissue Block","1 block",485,"Room Temp","Forzen","Paraffin"],
  ["04A1271-B","IPHASE Human Endometrial Paraffin Tissue Block","1 block",458,"Room Temp","Forzen","Paraffin"],
  ["04A1041-A","IPHASE Human Whole Brain Paraffin Tissue Block","1 block",387,"Room Temp","Forzen","Paraffin"],
  ["04A1041-D","IPHASE Human Brainstem Paraffin Tissue Block","1 block",458,"Room Temp","Forzen","Paraffin"],
  ["04A1051-B","IPHASE Human Ileal Paraffin Tissue Block","1 block",377,"Room Temp","Forzen","Paraffin"],
  ["04A1051-C","IPHASE Human Cecal Paraffin Tissue Block","1 block",378,"Room Temp","Forzen","Paraffin"],
  ["04A1051-D","IPHASE Human Jejunal Paraffin Tissue Block","1 block",379,"Room Temp","Forzen","Paraffin"],
  ["04A1051-E","IPHASE Human Rectal Paraffin Tissue Block","1 block",380,"Room Temp","Forzen","Paraffin"],
  ["04A1051-F","IPHASE Human Duodenal Paraffin Tissue Block","1 block",381,"Room Temp","Forzen","Paraffin"],
  ["04A1151","IPHASE Human Gastrointestinal Tract Paraffin Tissue Block","1 block",458,"Room Temp","Forzen","Paraffin"],
  ["04A1301","IPHASE Human Tonsil Paraffin Tissue Block","1 block",982,"Room Temp","Forzen","Paraffin"],
  ["04A1321","IPHASE Human Salivary Gland Paraffin Tissue Block","1 block",987,"Room Temp","Forzen","Paraffin"],
  ["04A1321-A","IPHASE Human Submandibular Gland Paraffin Tissue Block","1 block",992,"Room Temp","Forzen","Paraffin"],
  ["04A1321-B","IPHASE Human Parotid Gland Paraffin Tissue Block","1 block",659,"Room Temp","Forzen","Paraffin"],
  ["04A1341","IPHASE Human Sciatic Nerve Paraffin Tissue Block","1 block",662,"Room Temp","Forzen","Paraffin"],
  ["04A1351","IPHASE Human Esophageal Paraffin Tissue Block","1 block",487,"Room Temp","Forzen","Paraffin"],
  ];
const OCT = [
  ["04A1072","IPHASE Human Adrenal Tissue Block, OCT","1 block",456,"Dry Ice","Forzen","OCT"],
  ["04A1092","IPHASE Human Bladder Tissue Block, OCT","1 block",456,"Dry Ice","Forzen","OCT"],
  ["04A1102","IPHASE Human Bone Marrow Tissue Block, OCT","1 block",392,"Dry Ice","Forzen","OCT"],
  ["04A1112","IPHASE Human Breast Tissue Block, OCT","1 block",377,"Dry Ice","Forzen","OCT"],
  ["04A1042-C","IPHASE Human Cerebellar Tissue Block, OCT","1 block",329,"Dry Ice","Forzen","OCT"],
  ["04A1042-B","IPHASE Human Brain Tissue Block, OCT","1 block",387,"Dry Ice","Forzen","OCT"],
  ["04A1052-A","IPHASE Human Colon Tissue Block, OCT","1 block",377,"Dry Ice","Forzen","OCT"],
  ["04A1122","IPHASE Human Endothelium Tissue Block, OCT","1 block",566,"Dry Ice","Forzen","OCT"],
  ["04A1132","IPHASE Human Eye Tissue Block, OCT","1 block",598,"Dry Ice","Forzen","OCT"],
  ["04A1142","IPHASE Human Fallopian Tube Tissue Block, OCT","1 block",458,"Dry Ice","Forzen","OCT"],
  ["04A1292","IPHASE Human Gastric Tissue Block, OCT","1 block",458,"Dry Ice","Forzen","OCT"],
  ["04A1062","IPHASE Human Heart Tissue Block, OCT","1 block",377,"Dry Ice","Forzen","OCT"],
  ["04A1062-A","IPHASE Human Right Ventricular Tissue Block, OCT","1 block",377,"Dry Ice","Forzen","OCT"],
  ["04A1062-B","IPHASE Human Left Ventricular Tissue Block, OCT","1 block",377,"Dry Ice","Forzen","OCT"],
  ["04A1062-C","IPHASE Human Left Atrial Tissue Block, OCT","1 block",377,"Dry Ice","Forzen","OCT"],
  ["04A1062-D","IPHASE Human Right Atrial Tissue Block, OCT","1 block",377,"Dry Ice","Forzen","OCT"],
  ["04A1032","IPHASE Human Kidney Tissue Block, OCT","1 block",377,"Dry Ice","Forzen","OCT"],
  ["04A1012","IPHASE Human Liver Tissue Block, OCT","1 block",377,"Dry Ice","Forzen","OCT"],
  ["04A1022","IPHASE Human Lung Tissue Block, OCT","1 block",377,"Dry Ice","Forzen","OCT"],
  ["04A1162","IPHASE Human Lymph Node Tissue Block, OCT","1 block",485,"Dry Ice","Forzen","OCT"],
  ["04A1172","IPHASE Human Ovary Tissue Block, OCT","1 block",660,"Dry Ice","Forzen","OCT"],
  ["04A1282","IPHASE Human Pancreas Tissue Block, OCT","1 block",603,"Dry Ice","Forzen","OCT"],
  ["04A1182-B","IPHASE Human Thyroid(With Parathyroid) Tissue Block, OCT","1 block",997,"Dry Ice","Forzen","OCT"],
  ["04A1192","IPHASE Human Pituitary Tissue Block, OCT","1 block",858.8,"Dry Ice","Forzen","OCT"],
  ["04A1202","IPHASE Human Placenta Tissue Block, OCT","1 block",605,"Dry Ice","Forzen","OCT"],
  ["04A1212","IPHASE Human Prostate Tissue Block, OCT","1 block",458,"Dry Ice","Forzen","OCT"],
  ["04A1222","IPHASE Human Skin Tissue Block, OCT","1 block",458,"Dry Ice","Forzen","OCT"],
  ["04A1232","IPHASE Human Spinal Cord Tissue Block, OCT","1 block",653,"Dry Ice","Forzen","OCT"],
  ["04A1082","IPHASE Human Spleen Tissue Block, OCT","1 block",377,"Dry Ice","Forzen","OCT"],
  ["04A1312","IPHASE Human Skeletal Muscle Tissue Block, OCT","1 block",458,"Dry Ice","Forzen","OCT"],
  ["04A1312-A","IPHASE Human Transverse Skeletal Muscle Tissue Block, OCT","1 block",458,"Dry Ice","Forzen","OCT"],
  ["04A1312-B","IPHASE Human Longitudinal Skeletal Muscle Tissue Block, OCT","1 block",458,"Dry Ice","Forzen","OCT"],
  ["04A1242","IPHASE Human Testis Tissue Block, OCT","1 block",458,"Dry Ice","Forzen","OCT"],
  ["04A1252","IPHASE Human Thymus Tissue Block, OCT","1 block",485,"Dry Ice","Forzen","OCT"],
  ["04A1182-A","IPHASE Human Thyroid Tissue Block, OCT","1 block",660,"Dry Ice","Forzen","OCT"],
  ["04A1262","IPHASE Human Ureter Tissue Block, OCT","1 block",458,"Dry Ice","Forzen","OCT"],
  ["04A1272","IPHASE Human Uterus Tissue Block, OCT","1 block",485,"Dry Ice","Forzen","OCT"],
  ["04A1272-A","IPHASE Human Cervical Tissue Block, OCT","1 block",485,"Dry Ice","Forzen","OCT"],
  ["04A1272-B","IPHASE Human Endometrial Tissue Block, OCT","1 block",458,"Dry Ice","Forzen","OCT"],
  ["04A1042-A","IPHASE Human Whole Brain Tissue Block, OCT","1 block",387,"Dry Ice","Forzen","OCT"],
  ["04A1042-D","IPHASE Human Brainstem Tissue Block, OCT","1 block",458,"Dry Ice","Forzen","OCT"],
  ["04A1052-B","IPHASE Human Ileal Tissue Block, OCT","1 block",377,"Dry Ice","Forzen","OCT"],
  ["04A1052-C","IPHASE Human Cecal Tissue Block, OCT","1 block",378,"Dry Ice","Forzen","OCT"],
  ["04A1052-D","IPHASE Human Jejunal Tissue Block, OCT","1 block",379,"Dry Ice","Forzen","OCT"],
  ["04A1052-E","IPHASE Human Rectal Tissue Block, OCT","1 block",380,"Dry Ice","Forzen","OCT"],
  ["04A1052-F","IPHASE Human Duodenal Tissue Block, OCT","1 block",381,"Dry Ice","Forzen","OCT"],
  ["04A1152","IPHASE Human Gastrointestinal Tract Tissue Block, OCT","1 block",458,"Dry Ice","Forzen","OCT"],
  ["04A1302","IPHASE Human Tonsil Tissue Block, OCT","1 block",982,"Dry Ice","Forzen","OCT"],
  ["04A1322","IPHASE Human Salivary Gland Tissue Block, OCT","1 block",987,"Dry Ice","Forzen","OCT"],
  ["04A1322-A","IPHASE Human Submandibular Gland Tissue Block, OCT","1 block",992,"Dry Ice","Forzen","OCT"],
  ["04A1322-B","IPHASE Human Parotid Gland Tissue Block, OCT","1 block",659,"Dry Ice","Forzen","OCT"],
  ["04A1342","IPHASE Human Sciatic Nerve Tissue Block, OCT","1 block",662,"Dry Ice","Forzen","OCT"],
  ["04A1352","IPHASE Human Esophageal Tissue Block, OCT","1 block",487,"Dry Ice","Forzen","OCT"],
  ["04A1362","IPHASE Human Aortic Tissue Block, OCT","1 block",690,"Dry Ice","Forzen","OCT"],

];

const ParaffinSection = [

  ["04A1074","IPHASE Human Adrenal Paraffin Sections","5 slides",76,"Room Temp","Forzen","Paraffin Section"],
  ["04A1094","IPHASE Human Bladder Paraffin Section","5 slides",76,"Room Temp","Forzen","Paraffin Section"],
  ["04A1104","IPHASE Human Bone Marrow Paraffin Section","5 slides",92,"Room Temp","Forzen","Paraffin Section"],
  ["04A1114","IPHASE Human Breast Paraffin Section","5 slides",92,"Room Temp","Forzen","Paraffin Section"],
  ["04A1044-C","IPHASE Human Cerebellar Paraffin Section","5 slides",76,"Room Temp","Forzen","Paraffin Section"],
  ["04A1044-B","IPHASE Human Brain Paraffin Section","5 slides",76,"Room Temp","Forzen","Paraffin Section"],
  ["04A1054-A","IPHASE Human Colon Paraffin Section","5 slides",76,"Room Temp","Forzen","Paraffin Section"],
  ["04A1124","IPHASE Human Endothelium Paraffin Section","5 slides",205,"Room Temp","Forzen","Paraffin Section"],
  ["04A1134","IPHASE Human Eye Paraffin Section","5 slides",92,"Room Temp","Forzen","Paraffin Section"],
  ["04A1144","IPHASE Human Fallopian Tube Paraffin Section","5 slides",76,"Room Temp","Forzen","Paraffin Section"],
  ["04A1294","IPHASE Human Gastric Paraffin Section","5 slides",98,"Room Temp","Forzen","Paraffin Section"],
  ["04A1064","IPHASE Human Heart Paraffin Section","5 slides",76,"Room Temp","Forzen","Paraffin Section"],
  ["04A1064-A","IPHASE Human Right Ventricular Paraffin Section","5 slides",83,"Room Temp","Forzen","Paraffin Section"],
  ["04A1064-B","IPHASE Human Left Ventricular Paraffin Section","5 slides",83,"Room Temp","Forzen","Paraffin Section"],
  ["04A1064-C","IPHASE Human Left Atrial Paraffin Section","5 slides",83,"Room Temp","Forzen","Paraffin Section"],
  ["04A1064-D","IPHASE Human Right Atrial Paraffin Section","5 slides",83,"Room Temp","Forzen","Paraffin Section"],
  ["04A1034","IPHASE Human Kidney Paraffin Section","5 slides",76,"Room Temp","Forzen","Paraffin Section"],
  ["04A1014","IPHASE Human Liver Paraffin Section","5 slides",76,"Room Temp","Forzen","Paraffin Section"],
  ["04A1024","IPHASE Human Lung Paraffin Section","5 slides",76,"Room Temp","Forzen","Paraffin Section"],
  ["04A1164","IPHASE Human Lymph Node Paraffin Section","5 slides",76,"Room Temp","Forzen","Paraffin Section"],
  ["04A1174","IPHASE Human Ovary Paraffin Section","5 slides",92,"Room Temp","Forzen","Paraffin Section"],
  ["04A1284","IPHASE Human Pancreas Paraffin Section","5 slides",76,"Room Temp","Forzen","Paraffin Section"],
  ["04A1184-B","IPHASE Human Thyroid(With Parathyroid) Paraffin Section","5 slides",76,"Room Temp","Forzen","Paraffin Section"],
  ["04A1194","IPHASE Human Pituitary Paraffin Section","5 slides",160,"Room Temp","Forzen","Paraffin Section"],
  ["04A1204","IPHASE Human Placenta Paraffin Section","5 slides",76,"Room Temp","Forzen","Paraffin Section"],
  ["04A1214","IPHASE Human Prostate Paraffin Section","5 slides",92,"Room Temp","Forzen","Paraffin Section"],
  ["04A1224","IPHASE Human Skin Paraffin Section","5 slides",76,"Room Temp","Forzen","Paraffin Section"],
  ["04A1234","IPHASE Human Spinal Cord Paraffin Section","5 slides",76,"Room Temp","Forzen","Paraffin Section"],
  ["04A1084","IPHASE Human Spleen Paraffin Section","5 slides",76,"Room Temp","Forzen","Paraffin Section"],
  ["04A1314","IPHASE Human Skeletal Muscle Paraffin Section","5 slides",76,"Room Temp","Forzen","Paraffin Section"],
  ["04A1314-A","IPHASE Human Transverse Skeletal Muscle Paraffin Section","5 slides",83,"Room Temp","Forzen","Paraffin Section"],
  ["04A1314-B","IPHASE Human Longitudinal Skeletal Muscle Paraffin Section","5 slides",83,"Room Temp","Forzen","Paraffin Section"],
  ["04A1244","IPHASE Human Testis Paraffin Section","5 slides",76,"Room Temp","Forzen","Paraffin Section"],
  ["04A1254","IPHASE Human Thymus Paraffin Section","5 slides",92,"Room Temp","Forzen","Paraffin Section"],
  ["04A1184-A","IPHASE Human Thyroid Paraffin Section","5 slides",76,"Room Temp","Forzen","Paraffin Section"],
  ["04A1264","IPHASE Human Ureter Paraffin Section","5 slides",76,"Room Temp","Forzen","Paraffin Section"],
  ["04A1274","IPHASE Human Uterus Paraffin Section","5 slides",76,"Room Temp","Forzen","Paraffin Section"],
  ["04A1274-A","IPHASE Human Cervical Paraffin Section","5 slides",270,"Room Temp","Forzen","Paraffin Section"],
  ["04A1274-B","IPHASE Human Endometrial Paraffin Section","5 slides",76,"Room Temp","Forzen","Paraffin Section"],
  ["04A1044-A","IPHASE Human Whole Brain Paraffin Section","5 slides",86,"Room Temp","Forzen","Paraffin Section"],
  ["04A1044-D","IPHASE Human Brainstem Paraffin Section","5 slides",86.4,"Room Temp","Forzen","Paraffin Section"],
  ["04A1054-B","IPHASE Human Ileal Paraffin Section","5 slides",86,"Room Temp","Forzen","Paraffin Section"],
  ["04A1054-C","IPHASE Human Cecal Paraffin Section","5 slides",86,"Room Temp","Forzen","Paraffin Section"],
  ["04A1054-D","IPHASE Human Jejunal Paraffin Section","5 slides",93,"Room Temp","Forzen","Paraffin Section"],
  ["04A1054-E","IPHASE Human Rectal Paraffin Section","5 slides",93,"Room Temp","Forzen","Paraffin Section"],
  ["04A1054-F","IPHASE Human Duodenal Paraffin Section","5 slides",93,"Room Temp","Forzen","Paraffin Section"],
  ["04A1154","IPHASE Human Gastrointestinal Tract Paraffin Section","5 slides",93,"Room Temp","Forzen","Paraffin Section"],
  ["04A1304","IPHASE Human Tonsil Paraffin Section","5 slides",92,"Room Temp","Forzen","Paraffin Section"],
  ["04A1324","IPHASE Human Salivary Gland Paraffin Section","5 slides",320,"Room Temp","Forzen","Paraffin Section"],
  ["04A1324-A","IPHASE Human Submandibular Gland Paraffin Section","5 slides",325,"Room Temp","Forzen","Paraffin Section"],
  ["04A1324-B","IPHASE Human Parotid Gland Paraffin Section","5 slides",343,"Room Temp","Forzen","Paraffin Section"],
  ["04A1344","IPHASE Human Sciatic Nerve Paraffin Section","5 slides",270,"Room Temp","Forzen","Paraffin Section"],
  ["04A1354","IPHASE Human Esophageal Paraffin Section","5 slides",76,"Room Temp","Forzen","Paraffin Section"],

  ];
const OCTSection = [
  ["04A1073","IPHASE Human Adrenal Section, OCT","5 slides",76,"Dry Ice","Forzen","OCT Section"],
  ["04A1093","IPHASE Human Bladder Section, OCT","5 slides",76,"Dry Ice","Forzen","OCT Section"],
  ["04A1103","IPHASE Human Bone Marrow Section, OCT","5 slides",92,"Dry Ice","Forzen","OCT Section"],
  ["04A1113","IPHASE Human Breast Section, OCT","5 slides",92,"Dry Ice","Forzen","OCT Section"],
  ["04A1043-C","IPHASE Human Cerebellar Section, OCT","5 slides",76,"Dry Ice","Forzen","OCT Section"],
  ["04A1043-B","IPHASE Human Brain Section, OCT","5 slides",76,"Dry Ice","Forzen","OCT Section"],
  ["04A1053-A","IPHASE Human Colon Section, OCT","5 slides",76,"Dry Ice","Forzen","OCT Section"],
  ["04A1123","IPHASE Human Endothelium Section, OCT","5 slides",205,"Dry Ice","Forzen","OCT Section"],
  ["04A1133","IPHASE Human Eye Section, OCT","5 slides",92,"Dry Ice","Forzen","OCT Section"],
  ["04A1143","IPHASE Human Fallopian Tube Section, OCT","5 slides",76,"Dry Ice","Forzen","OCT Section"],
  ["04A1293","IPHASE Human Gastric Section, OCT","5 slides",98,"Dry Ice","Forzen","OCT Section"],
  ["04A1063","IPHASE Human Heart Section, OCT","5 slides",76,"Dry Ice","Forzen","OCT Section"],
  ["04A1063-A","IPHASE Human Right Ventricular Section, OCT","5 slides",83,"Dry Ice","Forzen","OCT Section"],
  ["04A1063-B","IPHASE Human Left Ventricular Section, OCT","5 slides",83,"Dry Ice","Forzen","OCT Section"],
  ["04A1063-C","IPHASE Human Left Atrial Section, OCT","5 slides",83,"Dry Ice","Forzen","OCT Section"],
  ["04A1063-D","IPHASE Human Right Atrial Section, OCT","5 slides",83,"Dry Ice","Forzen","OCT Section"],
  ["04A1033","IPHASE Human Kidney Section, OCT","5 slides",76,"Dry Ice","Forzen","OCT Section"],
  ["04A1013","IPHASE Human Liver Section, OCT","5 slides",76,"Dry Ice","Forzen","OCT Section"],
  ["04A1023","IPHASE Human Lung Section, OCT","5 slides",76,"Dry Ice","Forzen","OCT Section"],
  ["04A1163","IPHASE Human Lymph Node Section, OCT","5 slides",76,"Dry Ice","Forzen","OCT Section"],
  ["04A1173","IPHASE Human Ovary Section, OCT","5 slides",92,"Dry Ice","Forzen","OCT Section"],
  ["04A1283","IPHASE Human Pancreas Section, OCT","5 slides",76,"Dry Ice","Forzen","OCT Section"],
  ["04A1183-B","IPHASE Human Thyroid(With Parathyroid) Section, OCT","5 slides",76,"Dry Ice","Forzen","OCT Section"],
  ["04A1193","IPHASE Human Pituitary Section, OCT","5 slides",160,"Dry Ice","Forzen","OCT Section"],
  ["04A1203","IPHASE Human Placenta Section, OCT","5 slides",76,"Dry Ice","Forzen","OCT Section"],
  ["04A1213","IPHASE Human Prostate Section, OCT","5 slides",92,"Dry Ice","Forzen","OCT Section"],
  ["04A1223","IPHASE Human Skin Section, OCT","5 slides",76,"Dry Ice","Forzen","OCT Section"],
  ["04A1233","IPHASE Human Spinal Cord Section, OCT","5 slides",76,"Dry Ice","Forzen","OCT Section"],
  ["04A1083","IPHASE Human Spleen Section, OCT","5 slides",76,"Dry Ice","Forzen","OCT Section"],
  ["04A1313","IPHASE Human Skeletal Muscle Section, OCT","5 slides",76,"Dry Ice","Forzen","OCT Section"],
  ["04A1313-A","IPHASE Human Transverse Skeletal Muscle Section, OCT","5 slides",83,"Dry Ice","Forzen","OCT Section"],
  ["04A1313-B","IPHASE Human Longitudinal Skeletal Muscle Section, OCT","5 slides",83,"Dry Ice","Forzen","OCT Section"],
  ["04A1243","IPHASE Human Testis Section, OCT","5 slides",76,"Dry Ice","Forzen","OCT Section"],
  ["04A1253","IPHASE Human Thymus Section, OCT","5 slides",92,"Dry Ice","Forzen","OCT Section"],
  ["04A1183-A","IPHASE Human Thyroid Section, OCT","5 slides",76,"Dry Ice","Forzen","OCT Section"],
  ["04A1263","IPHASE Human Ureter Section, OCT","5 slides",76,"Dry Ice","Forzen","OCT Section"],
  ["04A1273","IPHASE Human Uterus Section, OCT","5 slides",76,"Dry Ice","Forzen","OCT Section"],
  ["04A1273-A","IPHASE Human Cervical Section, OCT","5 slides",270,"Dry Ice","Forzen","OCT Section"],
  ["04A1273-B","IPHASE Human Endometrial Section, OCT","5 slides",76,"Dry Ice","Forzen","OCT Section"],
  ["04A1043-A","IPHASE Human Whole Brain Section, OCT","5 slides",86,"Dry Ice","Forzen","OCT Section"],
  ["04A1043-D","IPHASE Human Brainstem Section, OCT","5 slides",86.4,"Dry Ice","Forzen","OCT Section"],
  ["04A1053-B","IPHASE Human Ileal Section, OCT","5 slides",86,"Dry Ice","Forzen","OCT Section"],
  ["04A1053-C","IPHASE Human Cecal Section, OCT","5 slides",86,"Dry Ice","Forzen","OCT Section"],
  ["04A1053-D","IPHASE Human Jejunal Section, OCT","5 slides",93,"Dry Ice","Forzen","OCT Section"],
  ["04A1053-E","IPHASE Human Rectal Section, OCT","5 slides",93,"Dry Ice","Forzen","OCT Section"],
  ["04A1053-F","IPHASE Human Duodenal Section, OCT","5 slides",93,"Dry Ice","Forzen","OCT Section"],
  ["04A1153","IPHASE Human Gastrointestinal Tract Tissue","5 slides",93,"Dry Ice","Forzen","OCT Section"],
  ["04A1303","IPHASE Human Tonsil Section, OCT","5 slides",92,"Dry Ice","Forzen","OCT Section"],
  ["04A1323","IPHASE Human Salivary Gland Section, OCT","5 slides",320,"Dry Ice","Forzen","OCT Section"],
  ["04A1323-A","IPHASE Human Submandibular Gland Section, OCT","5 slides",325,"Dry Ice","Forzen","OCT Section"],
  ["04A1323-B","IPHASE Human Parotid Gland Section, OCT","5 slides",343,"Dry Ice","Forzen","OCT Section"],
  ["04A1343","IPHASE Human Sciatic Nerve Section, OCT","5 slides",270,"Dry Ice","Forzen","OCT Section"],
  ["04A1353","IPHASE Human Esophageal Section, OCT","5 slides",76,"Dry Ice","Forzen","OCT Section"],
  ["04A1363","IPHASE Human Aortic Section, OCT","5 slides",98,"Dry Ice","Forzen","OCT Section"],
];

const MonkeyTissue1 = [
  ["04B1070","IPHASE Cynomolgus Monkey Adrenal Tissue","1 Piece",655.5,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1090","IPHASE Cynomolgus Monkey Bladder Tissue","About 1 g",657.4,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1330","IPHASE Cynomolgus Monkey Blood Cells Smear","1 Slide","Freebies with the purchase of other tissues","Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1100","IPHASE Cynomolgus Monkey Bone Marrow Smear","1 Slide",275.5,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1110","IPHASE Cynomolgus Monkey Breast Tissue","About 1 g",663.1,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1040-C","IPHASE Cynomolgus Monkey Cerebellar Tissue","About 1 g",390.45,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1040-B","IPHASE Cynomolgus Monkey Brain Tissue","About 1 g",378.1,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1050-A","IPHASE Cynomolgus Monkey Colon Tissue","About 1 g",390.45,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1120","IPHASE Cynomolgus Monkey Endothelium Tissue","About 1 g",560.5,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1130","IPHASE Cynomolgus Monkey Eye Tissue","About 1 g",657.4,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1140","IPHASE Cynomolgus Monkey Fallopian Tube Tissue","1 Piece",1007,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1290","IPHASE Cynomolgus Monkey Gastric Tissue","About 1 g",339.15,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1060","IPHASE Cynomolgus Monkey Heart Tissue","About 1 g",275.5,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1060-A","IPHASE Cynomolgus Monkey Right Ventricular Tissue","About 1 g",304,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1060-B","IPHASE Cynomolgus Monkey Left Ventricular Tissue","About 1 g",304,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1030","IPHASE Cynomolgus Monkey Kidney Tissue","About 1 g",275.5,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1010","IPHASE Cynomolgus Monkey Liver Tissue","About 1 g",275.5,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1020","IPHASE Cynomolgus Monkey Lung Tissue","About 1 g",275.5,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1160","IPHASE Cynomolgus Monkey Lymph Node Tissue","1 Piece",302.1,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1170","IPHASE Cynomolgus Monkey Ovary Tissue","1 Piece",912,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1280","IPHASE Cynomolgus Monkey Pancreas Tissue","About 1 g",424.65,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1180-B","IPHASE Cynomolgus Monkey Thyroid(With Parathyroid) Tissue","About 1 g",940.5,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1190","IPHASE Cynomolgus Monkey Pituitary Tissue","1 Piece",899.65,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1200","IPHASE Cynomolgus Monkey Placenta Tissue","1 Piece",473.1,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1210","IPHASE Cynomolgus Monkey Prostate Tissue","1 Piece",467.4,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1220","IPHASE Cynomolgus Monkey Skin Tissue","About 1 g",339.15,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1230","IPHASE Cynomolgus Monkey Spinal Cord Tissue","About 1 g",468.35,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1080","IPHASE Cynomolgus Monkey Spleen Tissue","About 1 g",329.65,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1310","IPHASE Cynomolgus Monkey Skeletal Muscle Tissue","About 1 g",275.5,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1310-A","IPHASE Cynomolgus Monkey Transverse Skeletal Muscle Tissue","About 1 g",320.15,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1310-B","IPHASE Cynomolgus Monkey Longitudinal Skeletal Muscle Tissue","About 1 g",320.15,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1240","IPHASE Cynomolgus Monkey Testis Tissue","About 1 g",320.15,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1250","IPHASE Cynomolgus Monkey Thymus Tissue","About 1 g",451.25,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1180-A","IPHASE Cynomolgus Monkey Thyroid Tissue","About 1 g",851.2,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1260","IPHASE Cynomolgus Monkey Ureter Tissue","1 Piece",456,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1270","IPHASE Cynomolgus Monkey Uterus Tissue","1 Piece",451.25,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1270-A","IPHASE Cynomolgus Monkey Cervical Tissue","1 Piece",521.55,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1270-B","IPHASE Cynomolgus Monkey Endometrial Tissue","1 Piece",513,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1040-A","IPHASE Cynomolgus Monkey Whole Brain Tissue","About 1 g",389.5,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1040-D","IPHASE Cynomolgus Monkey Brainstem Tissue","About 1 g",401.85,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1050-B","IPHASE Cynomolgus Monkey Ileal Tissue","About 1 g",425.6,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1050-C","IPHASE Cynomolgus Monkey Cecal Tissue","About 1 g",425.6,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1050-D","IPHASE Cynomolgus Monkey Jejunal Tissue","About 1 g",425.6,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1050-E","IPHASE Cynomolgus Monkey Rectal Tissue","About 1 g",425.6,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1050-F","IPHASE Cynomolgus Monkey Duodenal Tissue","About 1 g",425.6,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1150","IPHASE Cynomolgus Monkey Gastrointestinal Tract Tissue","About 1 g",549.1,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1300","IPHASE Cynomolgus Monkey Tonsil Tissue","1 Piece",401.85,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1320","IPHASE Cynomolgus Monkey Salivary Gland Tissue","1 Piece",574.75,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1320-A","IPHASE Cynomolgus Monkey Submandibular Gland Tissue","1 Piece",1045,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1320-B","IPHASE Cynomolgus Monkey Parotid Gland Tissue","1 Piece",1064,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1340","IPHASE Cynomolgus Monkey Sciatic Nerve","1 Piece",741,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ["04B1350","IPHASE Cynomolgus Monkey Esophageal Tissue","About 1 g",437,"Dry Ice","Monkey Tissue -80cCfrozen","Monkey Tissue"],
  ];

const MonkeyTissue2= [
  ["04B1091", "IPHASE Cynomolgus Monkey Bladder Paraffin Tissue", "1 block", 692, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1330", "IPHASE Cynomolgus Monkey Blood Cells Smear", "1 slide", "Freebies with the purchase of other tissues", "Dry Ice", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1101", "IPHASE Cynomolgus Monkey Bone Marrow Paraffin Tissue", "1 block", 290, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1111", "IPHASE Cynomolgus Monkey Breast Paraffin Tissue", "1 block", 698, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1041-C", "IPHASE Cynomolgus Monkey Cerebellar Paraffin Tissue", "1 block", 411, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1041-B", "IPHASE Cynomolgus Monkey Brain Paraffin Tissue", "1 block", 398, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1051-A", "IPHASE Cynomolgus Monkey Colon Paraffin Tissue", "1 block", 411, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1121", "IPHASE Cynomolgus Monkey Endothelium Paraffin Tissue", "1 block", 590, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1131", "IPHASE Cynomolgus Monkey Eye Paraffin Tissue", "1 block", 692, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1141", "IPHASE Cynomolgus Monkey Fallopian Tube Paraffin Tissue", "1 block", 1060, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1291", "IPHASE Cynomolgus Monkey Gastric Paraffin Tissue", "1 block", 357, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1061", "IPHASE Cynomolgus Monkey Heart Paraffin Tissue", "1 block", 290, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1061-A", "IPHASE Cynomolgus Monkey Right Ventricular Paraffin Tissue", "1 block", 320, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1061-B", "IPHASE Cynomolgus Monkey Left Ventricular Paraffin Tissue", "1 block", 320, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1031", "IPHASE Cynomolgus Monkey Kidney Paraffin Tissue", "1 block", 290, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1011", "IPHASE Cynomolgus Monkey Liver Paraffin Tissue", "1 block", 290, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1021", "IPHASE Cynomolgus Monkey Lung Paraffin Tissue", "1 block", 290, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1161", "IPHASE Cynomolgus Monkey Lymph Node Paraffin Tissue", "1 block", 318, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1171", "IPHASE Cynomolgus Monkey Ovary Paraffin Tissue", "1 block", 960, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1281", "IPHASE Cynomolgus Monkey Pancreas Paraffin Tissue", "1 block", 447, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1181-B", "IPHASE Cynomolgus Monkey Thyroid(With Parathyroid) Paraffin Tissue", "1 block", 990, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1191", "IPHASE Cynomolgus Monkey Pituitary Paraffin Tissue", "1 block", 947, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1201", "IPHASE Cynomolgus Monkey Placenta Paraffin Tissue", "1 block", 498, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1211", "IPHASE Cynomolgus Monkey Prostate Paraffin Tissue", "1 block", 492, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1221", "IPHASE Cynomolgus Monkey Skin Paraffin Tissue", "1 block", 357, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1231", "IPHASE Cynomolgus Monkey Spinal Cord Paraffin Tissue", "1 block", 493, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1081", "IPHASE Cynomolgus Monkey Spleen Paraffin Tissue", "1 block", 347, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1311", "IPHASE Cynomolgus Monkey Skeletal Muscle Paraffin Tissue", "1 block", 290, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1311-A", "IPHASE Cynomolgus Monkey Transverse Skeletal Muscle Paraffin Tissue", "1 block", 337, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1311-B", "IPHASE Cynomolgus Monkey Longitudinal Skeletal Muscle Paraffin Tissue", "1 block", 337, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1241", "IPHASE Cynomolgus Monkey Testis Paraffin Tissue", "1 block", 337, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1251", "IPHASE Cynomolgus Monkey Thymus Paraffin Tissue", "1 block", 475, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1181-A", "IPHASE Cynomolgus Monkey Thyroid Paraffin Tissue", "1 block", 896, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1261", "IPHASE Cynomolgus Monkey Ureter Paraffin Tissue", "1 block", 480, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1271", "IPHASE Cynomolgus Monkey Uterus Paraffin Tissue", "1 block", 475, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1271-A", "IPHASE Cynomolgus Monkey Cervical Paraffin Tissue", "1 block", 549, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1271-B", "IPHASE Cynomolgus Monkey Endometrial Paraffin Tissue", "1 block", 540, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1041-A", "IPHASE Cynomolgus Monkey Whole Brain Paraffin Tissue", "1 block", 410, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1041-D", "IPHASE Cynomolgus Monkey Brainstem Paraffin Tissue", "1 block", 423, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1051-B", "IPHASE Cynomolgus Monkey Ileal Paraffin Tissue", "1 block", 448, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1051-C", "IPHASE Cynomolgus Monkey Cecal Paraffin Tissue", "1 block", 448, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1051-D", "IPHASE Cynomolgus Monkey Jejunal Paraffin Tissue", "1 block", 448, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1051-E", "IPHASE Cynomolgus Monkey Rectal Paraffin Tissue", "1 block", 448, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1051-F", "IPHASE Cynomolgus Monkey Duodenal Paraffin Tissue", "1 block", 448, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1151", "IPHASE Cynomolgus Monkey Gastrointestinal Tract Paraffin Tissue", "1 block", 578, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1301", "IPHASE Cynomolgus Monkey Tonsil Paraffin Tissue", "1 block", 423, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1321", "IPHASE Cynomolgus Monkey Salivary Gland Paraffin Tissue", "1 block", 605, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1321-A", "IPHASE Cynomolgus Monkey Submandibular Gland Paraffin Tissue", "1 block", 1100, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1321-B", "IPHASE Cynomolgus Monkey Parotid Gland Paraffin Tissue", "1 block", 1120, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1341", "IPHASE Cynomolgus Monkey Sciatic Nerve", "1 block", 780, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],
["04B1351", "IPHASE Cynomolgus Monkey Esophageal Paraffin Tissue", "1 block", 460, "Room Temp", "Monkey Tissue FFPE", "Monkey Tissue"],

];

const MonkeyTissueOCT = [
  ["04B1072", "IPHASE Cynomolgus Monkey Adrenal Tissue, OCT", "1 block", "690", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1092", "IPHASE Cynomolgus Monkey Bladder Tissue, OCT", "1 block", "692", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1330", "IPHASE Cynomolgus Monkey Blood Cells Smear", "1 slide", "Freebies with the purchase of other tissues", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1102", "IPHASE Cynomolgus Monkey Bone Marrow Tissue, OCT", "1 block", "290", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1112", "IPHASE Cynomolgus Monkey Breast Tissue, OCT", "1 block", "698", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1042-C", "IPHASE Cynomolgus Monkey Cerebellar Tissue, OCT", "1 block", "411", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1042-B", "IPHASE Cynomolgus Monkey Brain Tissue, OCT", "1 block", "398", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1052-A", "IPHASE Cynomolgus Monkey Colon Tissue, OCT", "1 block", "411", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1122", "IPHASE Cynomolgus Monkey Endothelium Tissue, OCT", "1 block", "590", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1132", "IPHASE Cynomolgus Monkey Eye Tissue, OCT", "1 block", "692", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1142", "IPHASE Cynomolgus Monkey Fallopian Tube Tissue, OCT", "1 block", "1060", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1292", "IPHASE Cynomolgus Monkey Gastric Tissue, OCT", "1 block", "357", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1062", "IPHASE Cynomolgus Monkey Heart Tissue, OCT", "1 block", "290", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1062-A", "IPHASE Cynomolgus Monkey Right Ventricular Tissue, OCT", "1 block", "320", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1062-B", "IPHASE Cynomolgus Monkey Left Ventricular Tissue, OCT", "1 block", "320", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1032", "IPHASE Cynomolgus Monkey Kidney Tissue, OCT", "1 block", "290", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1012", "IPHASE Cynomolgus Monkey Liver Tissue, OCT", "1 block", "290", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1022", "IPHASE Cynomolgus Monkey Lung Tissue, OCT", "1 block", "290", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1162", "IPHASE Cynomolgus Monkey Lymph Node Tissue, OCT", "1 block", "318", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1172", "IPHASE Cynomolgus Monkey Ovary Tissue, OCT", "1 block", "960", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1282", "IPHASE Cynomolgus Monkey Pancreas Tissue, OCT", "1 block", "447", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1182-B", "IPHASE Cynomolgus Monkey Thyroid(With Parathyroid) Tissue, OCT", "1 block", "990", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1192", "IPHASE Cynomolgus Monkey Pituitary Tissue, OCT", "1 block", "947", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1202", "IPHASE Cynomolgus Monkey Placenta Tissue, OCT", "1 block", "498", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1212", "IPHASE Cynomolgus Monkey Prostate Tissue, OCT", "1 block", "492", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1222", "IPHASE Cynomolgus Monkey Skin Tissue, OCT", "1 block", "357", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1232", "IPHASE Cynomolgus Monkey Spinal Cord Tissue, OCT", "1 block", "493", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1082", "IPHASE Cynomolgus Monkey Spleen Tissue, OCT", "1 block", "347", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1312", "IPHASE Cynomolgus Monkey Skeletal Muscle Tissue, OCT", "1 block", "290", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1312-A", "IPHASE Cynomolgus Monkey Transverse Skeletal Muscle Tissue, OCT", "1 block", "337", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1312-B", "IPHASE Cynomolgus Monkey Longitudinal Skeletal Muscle Tissue, OCT", "1 block", "337", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1242", "IPHASE Cynomolgus Monkey Testis Tissue, OCT", "1 block", "337", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1252", "IPHASE Cynomolgus Monkey Thymus Tissue, OCT", "1 block", "475", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1182-A", "IPHASE Cynomolgus Monkey Thyroid Tissue, OCT", "1 block", "896", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1262", "IPHASE Cynomolgus Monkey Ureter Tissue, OCT", "1 block", "480", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1272", "IPHASE Cynomolgus Monkey Uterus Tissue, OCT", "1 block", "475", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1272-A", "IPHASE Cynomolgus Monkey Cervical Tissue, OCT", "1 block", "549", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1272-B", "IPHASE Cynomolgus Monkey Endometrial Tissue, OCT", "1 block", "540", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1042-A", "IPHASE Cynomolgus Monkey Whole Brain Tissue, OCT", "1 block", "410", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1042-D", "IPHASE Cynomolgus Monkey Brainstem Tissue, OCT", "1 block", "423", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1052-B", "IPHASE Cynomolgus Monkey Ileal Tissue, OCT", "1 block", "448", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1052-C", "IPHASE Cynomolgus Monkey Cecal Tissue, OCT", "1 block", "448", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1052-D", "IPHASE Cynomolgus Monkey Jejunal Tissue, OCT", "1 block", "448", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1052-E", "IPHASE Cynomolgus Monkey Rectal Tissue, OCT", "1 block", "448", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1052-F", "IPHASE Cynomolgus Monkey Duodenal Tissue, OCT", "1 block", "448", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1152", "IPHASE Cynomolgus Monkey Gastrointestinal Tract Tissue, OCT", "1 block", "578", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1302", "IPHASE Cynomolgus Monkey Tonsil Tissue, OCT", "1 block", "423", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1322", "IPHASE Cynomolgus Monkey Salivary Gland Tissue, OCT", "1 block", "605", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1322-A", "IPHASE Cynomolgus Monkey Submandibular Gland Tissue, OCT", "1 block", "1100", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1322-B", "IPHASE Cynomolgus Monkey Parotid Gland Tissue, OCT", "1 block", "1120", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1342", "IPHASE Cynomolgus Monkey Sciatic Nerve", "1 block", "780", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"],
  ["04B1352", "IPHASE Cynomolgus Monkey Esophageal Tissue, OCT", "1 block", "460", "Dry Ice", "Monkey Tissue OCT", "Monkey Tissue"]
];
const MonkeyTissueOCTSection = [
["04B1073","IPHASE Cynomolgus Monkey Adrenal Sections, OCT","5 slides","117","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1093","IPHASE Cynomolgus Monkey Bladder Sections, OCT","5 slides","118","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1330","IPHASE Cynomolgus Monkey Blood Cells Smear Sections, OCT","5 slides","Freebies with the purchase of other tissues","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1103","IPHASE Cynomolgus Monkey Bone Marrow Sections, OCT","5 slides","83","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1113","IPHASE Cynomolgus Monkey Breast Sections, OCT","5 slides","208","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1043-C","IPHASE Cynomolgus Monkey Cerebellar Sections, OCT","5 slides","83","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1043-B","IPHASE Cynomolgus Monkey Brain Sections, OCT","5 slides","83","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1053-A","IPHASE Cynomolgus Monkey Colon Sections, OCT","5 slides","83","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1123","IPHASE Cynomolgus Monkey Endothelium Sections, OCT","5 slides","120","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1133","IPHASE Cynomolgus Monkey Eye Sections, OCT","5 slides","147","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1143","IPHASE Cynomolgus Monkey Fallopian Tube Sections, OCT","5 slides","245","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1293","IPHASE Cynomolgus Monkey Gastric Sections, OCT","5 slides","83","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1063","IPHASE Cynomolgus Monkey Heart Sections, OCT","5 slides","83","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1063-A","IPHASE Cynomolgus Monkey Right Ventricular Sections, OCT","5 slides","92","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1063-B","IPHASE Cynomolgus Monkey Left Ventricular Sections, OCT","5 slides","92","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1033","IPHASE Cynomolgus Monkey Kidney Sections, OCT","5 slides","83","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1013","IPHASE Cynomolgus Monkey Liver Sections, OCT","5 slides","83","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1023","IPHASE Cynomolgus Monkey Lung Sections, OCT","5 slides","83","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1163","IPHASE Cynomolgus Monkey Lymph Node Sections, OCT","5 slides","93","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1173","IPHASE Cynomolgus Monkey Ovary Sections, OCT","5 slides","252","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1283","IPHASE Cynomolgus Monkey Pancreas Sections, OCT","5 slides","83","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1183-B","IPHASE Cynomolgus Monkey Thyroid (With Parathyroid) Sections, OCT","5 slides","373","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1193","IPHASE Cynomolgus Monkey Pituitary Sections, OCT","5 slides","182","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1203","IPHASE Cynomolgus Monkey Placenta Sections, OCT","5 slides","93","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1213","IPHASE Cynomolgus Monkey Prostate Sections, OCT","5 slides","92","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1223","IPHASE Cynomolgus Monkey Skin Sections, OCT","5 slides","91","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1233","IPHASE Cynomolgus Monkey Spinal Cord Sections, OCT","5 slides","162","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1083","IPHASE Cynomolgus Monkey Spleen Sections, OCT","5 slides","85","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1313","IPHASE Cynomolgus Monkey Skeletal Muscle Sections, OCT","5 slides","84","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1313-A","IPHASE Cynomolgus Monkey Transverse Skeletal Muscle Sections, OCT","5 slides","92","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1313-B","IPHASE Cynomolgus Monkey Longitudinal Skeletal Muscle Sections, OCT","5 slides","92","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1243","IPHASE Cynomolgus Monkey Testis Sections, OCT","5 slides","87","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1253","IPHASE Cynomolgus Monkey Thymus Sections, OCT","5 slides","88","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1183-A","IPHASE Cynomolgus Monkey Thyroid Sections, OCT","5 slides","166","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1263","IPHASE Cynomolgus Monkey Ureter Sections, OCT","5 slides","89","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1273","IPHASE Cynomolgus Monkey Uterus Sections, OCT","5 slides","88","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1273-A","IPHASE Cynomolgus Monkey Cervical Sections, OCT","5 slides","119","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1273-B","IPHASE Cynomolgus Monkey Endometrial Sections, OCT","5 slides","119","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1043-A","IPHASE Cynomolgus Monkey Whole Brain Sections, OCT","5 slides","83","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1043-D","IPHASE Cynomolgus Monkey Brainstem Sections, OCT","5 slides","108","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1053-B","IPHASE Cynomolgus Monkey Ileal Sections, OCT","5 slides","83","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1053-C","IPHASE Cynomolgus Monkey Cecal Sections, OCT","5 slides","83","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1053-D","IPHASE Cynomolgus Monkey Jejunal Sections, OCT","5 slides","83","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1053-E","IPHASE Cynomolgus Monkey Rectal Sections, OCT","5 slides","83","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1053-F","IPHASE Cynomolgus Monkey Duodenal Sections, OCT","5 slides","85","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1153","IPHASE Cynomolgus Monkey Gastrointestinal Tract Sections, OCT","5 slides","107","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1303","IPHASE Cynomolgus Monkey Tonsil Sections, OCT","5 slides","88","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1323","IPHASE Cynomolgus Monkey Salivary Gland Sections, OCT","5 slides","112","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1323-A","IPHASE Cynomolgus Monkey Submandibular Gland Sections, OCT","5 slides","237","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1323-B","IPHASE Cynomolgus Monkey Parotid Gland Sections, OCT","5 slides","238","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1343","IPHASE Cynomolgus Monkey Sciatic Nerve Sections, OCT","5 slides","248","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"],
["04B1353","IPHASE Cynomolgus Monkey Esophageal Sections, OCT","5 slides","85","Dry Ice","Monkey Tissue OCT Section","Monkey Tissue"]
];

const MonkeyTissueFFPESection = [
["04B1074","IPHASE Cynomolgus Monkey Adrenal Paraffin Sections","5 slides","117","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1094","IPHASE Cynomolgus Monkey Bladder Paraffin Sections","5 slides","118","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1330","IPHASE Cynomolgus Monkey Blood Cells Smear Paraffin Sections","5 slides","Freebies with the purchase of other tissues","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1104","IPHASE Cynomolgus Monkey Bone Marrow Paraffin Sections","5 slides","83","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1114","IPHASE Cynomolgus Monkey Breast Paraffin Sections","5 slides","208","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1044-C","IPHASE Cynomolgus Monkey Cerebellar Paraffin Sections","5 slides","83","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1044-B","IPHASE Cynomolgus Monkey Brain Paraffin Sections","5 slides","83","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1054-A","IPHASE Cynomolgus Monkey Colon Paraffin Sections","5 slides","83","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1124","IPHASE Cynomolgus Monkey Endothelium Paraffin Sections","5 slides","120","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1134","IPHASE Cynomolgus Monkey Eye Paraffin Sections","5 slides","147","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1144","IPHASE Cynomolgus Monkey Fallopian Tube Paraffin Sections","5 slides","245","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1294","IPHASE Cynomolgus Monkey Gastric Paraffin Sections","5 slides","83","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1064","IPHASE Cynomolgus Monkey Heart Paraffin Sections","5 slides","83","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1064-A","IPHASE Cynomolgus Monkey Right Ventricular Paraffin Sections","5 slides","92","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1064-B","IPHASE Cynomolgus Monkey Left Ventricular Paraffin Sections","5 slides","92","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1034","IPHASE Cynomolgus Monkey Kidney Paraffin Sections","5 slides","83","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1014","IPHASE Cynomolgus Monkey Liver Paraffin Sections","5 slides","83","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1024","IPHASE Cynomolgus Monkey Lung Paraffin Sections","5 slides","83","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1164","IPHASE Cynomolgus Monkey Lymph Node Paraffin Sections","5 slides","93","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1174","IPHASE Cynomolgus Monkey Ovary Paraffin Sections","5 slides","252","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1284","IPHASE Cynomolgus Monkey Pancreas Paraffin Sections","5 slides","83","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1184-B","IPHASE Cynomolgus Monkey Thyroid (With Parathyroid) Paraffin Sections","5 slides","373","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1194","IPHASE Cynomolgus Monkey Pituitary Paraffin Sections","5 slides","182","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1204","IPHASE Cynomolgus Monkey Placenta Paraffin Sections","5 slides","93","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1214","IPHASE Cynomolgus Monkey Prostate Paraffin Sections","5 slides","92","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1224","IPHASE Cynomolgus Monkey Skin Paraffin Sections","5 slides","91","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1234","IPHASE Cynomolgus Monkey Spinal Cord Paraffin Sections","5 slides","162","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1084","IPHASE Cynomolgus Monkey Spleen Paraffin Sections","5 slides","85","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1314","IPHASE Cynomolgus Monkey Skeletal Muscle Paraffin Sections","5 slides","84","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1314-A","IPHASE Cynomolgus Monkey Transverse Skeletal Muscle Paraffin Sections","5 slides","92","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1314-B","IPHASE Cynomolgus Monkey Longitudinal Skeletal Muscle Paraffin Sections","5 slides","92","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1244","IPHASE Cynomolgus Monkey Testis Paraffin Sections","5 slides","87","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1254","IPHASE Cynomolgus Monkey Thymus Paraffin Sections","5 slides","88","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1184-A","IPHASE Cynomolgus Monkey Thyroid Paraffin Sections","5 slides","166","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1264","IPHASE Cynomolgus Monkey Ureter Paraffin Sections","5 slides","89","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1274","IPHASE Cynomolgus Monkey Uterus Paraffin Sections","5 slides","88","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1274-A","IPHASE Cynomolgus Monkey Cervical Paraffin Sections","5 slides","119","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1274-B","IPHASE Cynomolgus Monkey Endometrial Paraffin Sections","5 slides","119","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1044-A","IPHASE Cynomolgus Monkey Whole Brain Paraffin Sections","5 slides","83","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1044-D","IPHASE Cynomolgus Monkey Brainstem Paraffin Sections","5 slides","108","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1054-B","IPHASE Cynomolgus Monkey Ileal Paraffin Sections","5 slides","83","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1054-C","IPHASE Cynomolgus Monkey Cecal Paraffin Sections","5 slides","83","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1054-D","IPHASE Cynomolgus Monkey Jejunal Paraffin Sections","5 slides","83","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1054-E","IPHASE Cynomolgus Monkey Rectal Paraffin Sections","5 slides","83","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1054-F","IPHASE Cynomolgus Monkey Duodenal Paraffin Sections","5 slides","85","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1154","IPHASE Cynomolgus Monkey Gastrointestinal Tract Paraffin Sections","5 slides","107","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1304","IPHASE Cynomolgus Monkey Tonsil Paraffin Sections","5 slides","88","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1324","IPHASE Cynomolgus Monkey Salivary Gland Paraffin Sections","5 slides","112","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1324-A","IPHASE Cynomolgus Monkey Submandibular Gland Paraffin Sections","5 slides","237","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1324-B","IPHASE Cynomolgus Monkey Parotid Gland Paraffin Sections","5 slides","238","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1344","IPHASE Cynomolgus Monkey Sciatic Nerve Paraffin Sections","5 slides","248","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"],
["04B1354","IPHASE Cynomolgus Monkey Esophageal Paraffin Sections","5 slides","85","Room Temp","Monkey Tissue FFPE Section","Monkey Tissue"]
];

const CellIsolationHuman = [
  ["071A100.11","IPHASE Human PBMC Isolation Kit","For isolate 100mL whole blood","","Dry Ice","Human","Cell Isolation"],
  ["071A101.11","IPHASE Human CD3+T Cells Positive Selection Kit","10 test","152","Dry Ice","Human","Cell Isolation"],
  ["071A101.14","IPHASE Human CD3+T Cells Positive Selection Kit","100 test","455","Dry Ice","Human","Cell Isolation"],
  ["071A201.11","IPHASE Human CD3+T Cells Negative Isolation Kit","10 test","169","Dry Ice","Human","Cell Isolation"],
  ["071A102.11","IPHASE Human CD4+T Cells Positive Selection Kit","10 test","152","Dry Ice","Human","Cell Isolation"],
  ["071A102.14","IPHASE Human CD4+T Cells Positive Selection Kit","100 test","455","Dry Ice","Human","Cell Isolation"],
  ["071A202.11","IPHASE Human CD4+T Cells Negative Isolation Kit","10 test","169","Dry Ice","Human","Cell Isolation"],
  ["071A103.11","IPHASE Human CD8+T Cells Positive Selection Kit","10 test","152","Dry Ice","Human","Cell Isolation"],
  ["071A103.14","IPHASE Human CD8+T Cells Positive Selection Kit","100 test","455","Dry Ice","Human","Cell Isolation"],
  ["071A203.11","IPHASE Human CD8+T Cells Negative Isolation Kit","10 test","169","Dry Ice","Human","Cell Isolation"],
  ["071A303.11","IPHASE Human CD8+T Cells Positive Selection Kit, Aptamer","10 test","139","Dry Ice","Human","Cell Isolation"],
  ["071A303.14","IPHASE Human CD8+T Cells Positive Selection Kit, Aptamer","100 test","399","Dry Ice","Human","Cell Isolation"],
  ["071A403.11","IPHASE Human CD8+T Cells Traceless Selection Kit","10 test","169","Dry Ice","Human","Cell Isolation"],
  ["071A403.14","IPHASE Human CD8+T Cells Traceless Selection Kit","100 test","499","Dry Ice","Human","Cell Isolation"],
  ["071A105.11","IPHASE Human CD14+ Monocytes Cells Positive Selection Kit","10 test","185","Dry Ice","Human","Cell Isolation"],
  ["071A105.14","IPHASE Human CD14+ Monocytes Cells Positive Selection Kit","100 test","555","Dry Ice","Human","Cell Isolation"],
  ["071A205.11","IPHASE Human Monocytes Negative Isolation Kit","10 test","183","Dry Ice","Human","Cell Isolation"],
  ["071A305.11","IPHASE Human CD14+ Monocytes Cells Positive Selection Kit, Aptamer","10 test","155","Dry Ice","Human","Cell Isolation"],
  ["071A305.14","IPHASE Human CD14+ Monocytes Cells Positive Selection Kit, Aptamer","100 test","460","Dry Ice","Human","Cell Isolation"],
  ["071A106.11","IPHASE Human CD19+B Cells Positive Selection Kit","10 test","155","Dry Ice","Human","Cell Isolation"],
  ["071A106.14","IPHASE Human CD19+B Cells Positive Selection Kit","100 test","460","Dry Ice","Human","Cell Isolation"],
  ["071A206.11","IPHASE Human Pan B Cells Negative Isolation Kit","10 test","160","Dry Ice","Human","Cell Isolation"],
  ["071A109.11","IPHASE Human CD56+ Cells Positive Selection Kit","10 test","158","Dry Ice","Human","Cell Isolation"],
  ["071A109.14","IPHASE Human CD56+ Cells Positive Selection Kit","100 test","470","Dry Ice","Human","Cell Isolation"],
  ["071A209.11","IPHASE Human NK Cells Negative Isolation Kit","10 test","168","Dry Ice","Human","Cell Isolation"],
  ["071A211.11","IPHASE Human Red Cells Isolation Kit","For isolate 100mL whole blood","185","Dry Ice","Human","Cell Isolation"],
  ["071A112.11","IPHASE Human Spleen Mononuclear Cells Isolation Kit","1 set","245","Dry Ice","Human","Cell Isolation"]
];
const CellIsolationMonkey = [
  ["071B100.11", "IPHASE Monkey PBMC Isolation Kit", "For isolate 100mL whole blood", "199", "Dry Ice", "Monkey", "Cell Isolation"],
  ["071B100.41", "IPHASE Monkey Red Cells Isolation Kit", "For isolate 100mL whole blood", "185", "Dry Ice", "Monkey", "Cell Isolation"],
  ["071B112.11", "IPHASE Monkey Spleen Mononuclear Cells Isolation Kit", "1 set", "245", "Dry Ice", "Monkey", "Cell Isolation"]
];
const CellIsolationDog = [
  ["071C100.11", "IPHASE Dog(Beagle) PBMC Isolation Kit", "For isolate 100mL whole blood", "196", "Dry Ice", "Dog", "Cell Isolation"],
  ["071C112.11", "IPHASE Dog(Beagle) Spleen Mononuclear Cells Isolation Kit", "1 set", "245", "Dry Ice", "Dog", "Cell Isolation"]
];
const CellIsolationRat = [
  ["071D100.11", "IPHASE Rat PBMC Isolation Kit", "For isolate 100mL whole blood", "196", "Dry Ice", "Rat", "Cell Isolation"],
  ["071D100.41", "IPHASE Rat Red Blood Cells Isolation Kit", "For isolate 100mL whole blood", "185", "Dry Ice", "Rat", "Cell Isolation"],
  ["071D112.11", "IPHASE Rat Spleen Mononuclear Cells Isolation Kit", "1 set", "245", "Dry Ice", "Rat", "Cell Isolation"]
];
const CellIsolationMouse = [
  ["071E100.11", "IPHASE Mouse PBMC Isolation Kit", "For isolate 100mL whole blood", "197", "Dry Ice", "Mouse", "Cell Isolation"],
  ["071E100.41", "IPHASE Mouse Red Blood Cells Isolation Kit", "For isolate 100mL whole blood", "185", "Dry Ice", "Mouse", "Cell Isolation"],
  ["071E112.11", "IPHASE Mouse Spleen Mononuclear Cells Isolation Kit", "1 set", "245", "Dry Ice", "Mouse", "Cell Isolation"]
];

const CellIsolationMiniPig = [
  ["071H100.11", "IPHASE Minipig PBMC Isolation Kit", "For isolate 100mL whole blood", "196", "Dry Ice", "Mini Pig", "Cell Isolation"]
];

const CellIsolationRabbit = [
  ["071I100.11", "IPHASE Rabbit PBMC Isolation Kit", "For isolate 100mL whole blood", "220", "Dry Ice", "Rabbit", "Cell Isolation"],
  ["071I112.11", "IPHASE Rabbit Spleen Mononuclear Cells Isolation Kit", "1 set", "265", "Dry Ice", "Rabbit", "Cell Isolation"]
];

const CellIsolationFeline = [
  ["071G100.11", "IPHASE Feline PBMC Isolation Kit", "For isolate 100mL whole blood", "199", "Dry Ice", "Feline", "Cell Isolation"]
];

const CellIsolationAlpaca = [
  ["071P100.11", "IPHASE Alpaca PBMC Isolation Kit", "For isolate 100mL whole blood", "199", "Dry Ice", "Alpaca", "Cell Isolation"]
];

const AccessoriesCellIsolation = [
  ["072008.12", "IPHASE Cell Thaw Medium", "10ml", "15", "Dry Ice", "Accessories for Cell Isolation", "Cell Isolation"],
  ["072013.11", "IPHASE PBMC Serum-Free Culture Freezing Medium", "50mL", "139", "Dry Ice", "Accessories for Cell Isolation", "Cell Isolation"],
  ["072014.11", "血小板分离试剂盒", "1 set", "215", "Dry Ice", "Accessories for Cell Isolation", "Cell Isolation"]
];

const Magnet = [
  ["073001.11", "IPHASE Magnet", "5mL*1 well", "486", "Room Temp", "Magnet", "Cell Isolation"]
];


const Lentivirus = [
  ["074001.11", "IPHASE Lentivirus Concentration Reagent", "50mL", "249", "Dry Ice", "Lentivirus", "Cell Isolation"],
  ["074001.12", "IPHASE Lentivirus Packaging Kit", "10 test", "297", "Dry Ice", "Lentivirus", "Cell Isolation"],
  ["074001.13", "IPHASE eGFP-Luciferase Lentivirus", "50μL×4tubes,1E8 TU/mL", "271", "Dry Ice", "Lentivirus", "Cell Isolation"],
  ["074001.14", "IPHASE mCherry-Luciferase Lentivirus", "50μL×4tubes,1E8 TU/mL", "271", "Dry Ice", "Lentivirus", "Cell Isolation"],
  ["074001.15", "IPHASE eGFP-Luciferase-Puro Lentivirus", "50μL×4tubes,1E8 TU/mL", "577", "Dry Ice", "Lentivirus", "Cell Isolation"],
  ["074001.16", "IPHASE mCherry-Luciferase-Puro Lentivirus", "50μL×4tubes,1E8 TU/mL", "577", "Dry Ice", "Lentivirus", "Cell Isolation"],
  ["074001.18", "IPHASE Luciferase-Puro Lentivirus", "50μL×4tubes,1E8 TU/mL", "563", "Dry Ice", "Lentivirus", "Cell Isolation"],
  ["074001.19", "IPHASE eGFP Lentivirus", "50μL×4tubes,1E8 TU/mL", "555", "Dry Ice", "Lentivirus", "Cell Isolation"],
  ["074001.20", "IPHASE eGFP-Puro Lentivirus", "50μL×4tubes,1E8 TU/mL", "555", "Dry Ice", "Lentivirus", "Cell Isolation"],
  ["074001.21", "IPHASE mCherry Lentivirus", "50μL×4tubes,1E8 TU/mL", "555", "Dry Ice", "Lentivirus", "Cell Isolation"],
  ["074001.22", "IPHASE mCherry-Puro Lentivirus", "50μL×4tubes,1E8 TU/mL", "555", "Dry Ice", "Lentivirus", "Cell Isolation"],
  ["074002.11", "IPHASE Bacteriophage Concentration Reagent", "100mL", "271", "Dry Ice", "Lentivirus", "Cell Isolation"],
  ["074003.11", "IPHASE Hepatitis B Virus Concentration Reagent", "100mL", "271", "Dry Ice", "Lentivirus", "Cell Isolation"]
];

const MediumAndSupplement = [
  ["075001.11", "IPHASE hMSC ACF Culture Medium Kit", "1Kit", "285", "Dry Ice", "Medium and Supplement", "Cell Isolation"],
  ["075001.13", "IPHASE hMSC ACF Culture Basal Medium", "500mL", "198", "Dry Ice", "Medium and Supplement", "Cell Isolation"],
  ["075001.14", "IPHASE hMSC ACF Culture Medium Supplement", "10mL", "87", "Dry Ice", "Medium and Supplement", "Cell Isolation"],
  ["075001.22", "IPHASE hMSC Serum-Free Basal Medium", "500mL", "221", "Dry Ice", "Medium and Supplement", "Cell Isolation"],
  ["075001.23", "IPHASE hMSC Serum-Free Medium Supplement", "10mL", "106", "Dry Ice", "Medium and Supplement", "Cell Isolation"],
  ["075001.41", "IPHASE hMSC Gentle Trypsin", "100mL", "85", "Dry Ice", "Medium and Supplement", "Cell Isolation"]
];

const PBMCHuman = [
  ["082A01.21", "IPHASE Human PBMC,Frozen", "5million", "69", "Liquid Nitrogen", "Human", "Primary Cell"],
  ["082A01.22", "IPHASE Human PBMC,Frozen", "10million", "125", "Liquid Nitrogen", "Human", "Primary Cell"],
  ["082A01.23", "IPHASE Human PBMC,Frozen", "50million", "486", "Liquid Nitrogen", "Human", "Primary Cell"],
  ["082A02.21", "IPHASE Human CD3+T Cells,Negative Selection,Frozen", "5million", "278", "Liquid Nitrogen", "Human", "Primary Cell"],
  ["082A02.22", "IPHASE Human CD3+T Cells,Negative Selection,Frozen", "20million", "1042", "Liquid Nitrogen", "Human", "Primary Cell"],
  ["082A03.21", "IPHASE Human CD4+T Cells,Negative Selection,Frozen", "5million", "347", "Liquid Nitrogen", "Human", "Primary Cell"],
  ["082A03.22", "IPHASE Human CD4+T Cells,Negative Selection,Frozen", "20million", "1181", "Liquid Nitrogen", "Human", "Primary Cell"],
  ["082A04.21", "IPHASE Human CD8+T Cells,Negative Selection,Frozen", "5million", "694", "Liquid Nitrogen", "Human", "Primary Cell"],
  ["082A04.22", "IPHASE Human CD8+T Cells,Negative Selection,Frozen", "20million", "2083", "Liquid Nitrogen", "Human", "Primary Cell"],
  ["082A05.21", "IPHASE Human CD14+Monocytes Cells,Negative Selection,Frozen", "2million", "278", "Liquid Nitrogen", "Human", "Primary Cell"],
  ["082A05.22", "IPHASE Human CD14+Monocytes Cells,Negative Selection,Frozen", "5million", "625", "Liquid Nitrogen", "Human", "Primary Cell"],
  ["082A06.21", "IPHASE Human CD19+B Cells,Negative Selection,Frozen", "2million", "347", "Liquid Nitrogen", "Human", "Primary Cell"],
  ["082A06.22", "IPHASE Human CD19+B Cells,Negative Selection,Frozen", "5million", "694", "Liquid Nitrogen", "Human", "Primary Cell"],
  ["082A07.21", "IPHASE Human CD56+NK Cells,Negative Selection,Frozen", "2million", "319", "Liquid Nitrogen", "Human", "Primary Cell"],
  ["082A07.22", "IPHASE Human CD56+NK Cells,Negative Selection,Frozen", "5million", "667", "Liquid Nitrogen", "Human", "Primary Cell"],
  ["082A08.24", "IPHASE Human CD34+ Cells,Negative Selection,Frozen", "100million", "4167", "Liquid Nitrogen", "Human", "Primary Cell"],
  ["082A16.21", "IPHASE Human Peripheral Blood Dendritic Cells,Frozen", "1.5million", "1194", "Liquid Nitrogen", "Human", "Primary Cell"],
  ["082A17.21", "IPHASE Human Peripheral Blood Macrophages,Frozen", "1.5million", "1194", "Liquid Nitrogen", "Human", "Primary Cell"]
];

const PBMCMonkey = [
  ["082B101.21", "IPHASE Monkey(Cynomolgus) PBMC,Frozen", "5million", "417", "Liquid Nitrogen", "Monkey", "Primary Cell"],
  ["082B101.22", "IPHASE Monkey(Cynomolgus) PBMC,Frozen", "20million", "1250", "Liquid Nitrogen", "Monkey", "Primary Cell"],
  ["082B201.21", "IPHASE Monkey(Rhesus) PBMC,Frozen", "5million", "450", "Liquid Nitrogen", "Monkey", "Primary Cell"],
  ["082B108.21", "IPHASE Monkey(Cynomolgus) SMC,Frozen", "5million", "428", "Liquid Nitrogen", "Monkey", "Primary Cell"],
  ["082B109.21", "IPHASE Monkey(Cynomolgus) Kidney Proximal Tubule Cells,Frozen", "2million", "987", "Liquid Nitrogen", "Monkey", "Primary Cell"],
  ["082B111.21", "IPHASE Monkey(Cynomolgus) Colonic Epithelial Cells,Frozen", "1million", "789", "Liquid Nitrogen", "Monkey", "Primary Cell"]
];

const PBMCDog = [
  ["082C01.21", "IPHASE Dog(Beagle) PBMC,Frozen", "5million", "335", "Liquid Nitrogen", "Dog", "Primary Cell"],
  ["082C08.22", "IPHASE Dog(Beagle) SMC,Frozen", "5million", "350", "Liquid Nitrogen", "Dog", "Primary Cell"]
];

const PBMCRat = [
  ["082D01.21", "IPHASE Rat(Sprague-Dawley) PBMC,Frozen", "5million", "199", "Liquid Nitrogen", "Rat", "Primary Cell"],
  ["082D01.22", "IPHASE Rat(Sprague-Dawley) PBMC,Frozen", "20million", "696", "Liquid Nitrogen", "Rat", "Primary Cell"],
  ["082D21.21", "IPHASE Rat(Wistar) PBMC,Frozen", "5million", "238", "Liquid Nitrogen", "Rat", "Primary Cell"],
  ["082D11.21", "IPHASE Rat(Sprague-Dawley) Colonic Epithelial Cells,Frozen", "1million", "560", "Liquid Nitrogen", "Rat", "Primary Cell"]
];

const PBMCMouse = [
  ["082E01.21", "IPHASE Mouse(ICR/CD-1) PBMC,Frozen", "5million", "370", "Liquid Nitrogen", "Mouse", "Primary Cell"],
  ["082E21.21", "IPHASE Mouse(C57BL/6) PBMC,Frozen", "5million", "410", "Liquid Nitrogen", "Mouse", "Primary Cell"],
  ["082E41.21", "IPHASE Mouse(BALB/c) PBMC,Frozen", "5million", "410", "Liquid Nitrogen", "Mouse", "Primary Cell"],
  ["082E02.21", "IPHASE Mouse(ICR/CD-1) Peripheral Blood CD3+T Cells,Negative Selection,Frozen", "1million", "250", "Liquid Nitrogen", "Mouse", "Primary Cell"],
  ["082E02.22", "IPHASE Mouse(ICR/CD-1) Peripheral Blood CD3+T Cells,Negative Selection,Frozen", "5million", "1111", "Liquid Nitrogen", "Mouse", "Primary Cell"],
  ["082E03.21", "IPHASE Mouse(ICR/CD-1) Peripheral Blood CD4+T Cells,Negative Selection,Frozen", "1million", "278", "Liquid Nitrogen", "Mouse", "Primary Cell"],
  ["082E03.22", "IPHASE Mouse(ICR/CD-1) Peripheral Blood CD4+T Cells,Negative Selection,Frozen", "5million", "1181", "Liquid Nitrogen", "Mouse", "Primary Cell"],
  ["082E04.21", "IPHASE Mouse(ICR/CD-1) Peripheral Blood CD8+T Cells,Negative Selection,Frozen", "1million", "500", "Liquid Nitrogen", "Mouse", "Primary Cell"],
  ["082E04.22", "IPHASE Mouse(ICR/CD-1) Peripheral Blood CD8+T Cells,Negative Selection,Frozen", "5million", "2222", "Liquid Nitrogen", "Mouse", "Primary Cell"],

  ["082E05.21", "IPHASE Mouse(ICR/CD-1) Peripheral Blood CD14+ Monocytes,Negative Selection,Frozen", "1million", "722", "Liquid Nitrogen", "Mouse", "Primary Cell"],
  ["082E05.22", "IPHASE Mouse(ICR/CD-1) Peripheral Blood CD14+ Monocytes,Negative Selection,Frozen", "5million", "2778", "Liquid Nitrogen", "Mouse", "Primary Cell"],

  ["082E06.21", "IPHASE Mouse(ICR/CD-1) Peripheral Blood CD19+B Cells,Frozen", "1million", "972", "Liquid Nitrogen", "Mouse", "Primary Cell"],

  ["082E08.22", "IPHASE Mouse(ICR/CD-1) SMC,Frozen", "5million", "275", "Liquid Nitrogen", "Mouse", "Primary Cell"],
  ["082E208.22", "IPHASE Mouse(C57BL/6) SMC,Frozen", "5million", "295", "Liquid Nitrogen", "Mouse", "Primary Cell"],

  ["082E210.21", "IPHASE Mouse(C57BL/6) Spleen CD4+T Cells,Negative Selection,Frozen", "1million", "486", "Liquid Nitrogen", "Mouse", "Primary Cell"],
  ["082E209.21", "IPHASE Mouse(C57BL/6) Spleen CD8+T Cells,Negative Selection,Frozen", "1million", "625", "Liquid Nitrogen", "Mouse", "Primary Cell"],

  ["082E410.21", "IPHASE Mouse(BALB/c) Spleen CD4+T Cells,Negative Selection,Frozen", "1million", "486", "Liquid Nitrogen", "Mouse", "Primary Cell"],
  ["082E409.21", "IPHASE Mouse(BALB/c) Spleen CD8+T Cells,Negative Selection,Frozen", "0.5million", "625", "Liquid Nitrogen", "Mouse", "Primary Cell"],

  ["082E11.21", "IPHASE Mouse(ICR/CD-1) Colonic Epithelial Cells,Frozen", "1million", "978", "Liquid Nitrogen", "Mouse", "Primary Cell"]
];

const PBMCMinipig = [
  ["082H01.21", "IPHASE Minipig(Bama) PBMC,Male,Frozen", "5million", "385", "Liquid Nitrogen", "Mini Pig", "Primary Cell"],
  ["082H02.21", "IPHASE Minipig(Bama) PBMC,Female,Frozen", "5million", "395", "Liquid Nitrogen", "Mini Pig", "Primary Cell"]
];

const PBMCRabbit = [
  ["082I11.21", "IPHASE Rabbit(New Zealand White) PBMC,Frozen", "5million", "380", "Liquid Nitrogen", "Rabbit", "Primary Cell"],
  ["082I21.21", "IPHASE Rabbit(Japanese White) PBMC,Frozen", "5million", "390", "Liquid Nitrogen", "Rabbit", "Primary Cell"]
];

const PBMCFeline = [
  ["082G01.21", "IPHASE Feline PBMC,Frozen", "5million", "435", "Liquid Nitrogen", "Feline", "Primary Cell"]
];

const PBMCGuineaPig = [
  ["082M11.21", "IPHASE Guinea Pig(Hartley) PBMC,Frozen", "5million", "405", "Liquid Nitrogen", "Guinea Pig", "Primary Cell"]
];

const AccessoriesPrimaryCells = [
  ["086A001.11", "IPHASE Human IL-2 Cytokine", "500000IU/mL,1mL", "62.5", "Dry Ice", "", "Accessories for primary cell"],
  ["086A109.21", "IPHASE Human CD3/CD28 T Cells Activation/Expansion Kit", "20million", "305", "Dry Ice", "", "Accessories for primary cell"],
  ["086A109.22", "IPHASE Human CD3/CD28 T Cells Activation/Expansion Kit", "100million", "1375", "Dry Ice", "", "Accessories for primary cell"],
  ["086E109.21", "IPHASE Mouse CD3/CD28 T Cells Activation/Expansion Kit", "20million", "291", "Dry Ice", "", "Accessories for primary cell"],
  ["086E109.22", "IPHASE Mouse CD3/CD28 T Cells Activation/Expansion Kit", "100million", "1312", "Dry Ice", "", "Accessories for primary cell"]
];


// ===============================
// 🧩 Accordion Section Generator
// ===============================
const accordionSections = [
  ["Blank Serum", "productsTableSerum"],
  ["Blank Plasma", "productsTablePlasma"],
  ["Blank Bile", "productsTableBile"],
  ["Blank Liver Tissue", "productsTableLiver"],
  ["Alternative Biological Matrix", "productsBiologicalMatrix"],
  ["Vitreous Humor", "productsVitreousHumor"],
  ["Blank Aqueous Fluid", "productsBlankAqueousFluid"],
  ["Marrow", "productsMarrow"],
  ["Milk", "productsMilk"],
  ["CerebrospinalFluid","productsCerebrospinalFluid"],
  ["Sterile Product", "productsSterileProduct"],
  ["Organizational Homogenization Products", "productsOrganizationalHomogenizationProducts"],
  ["Human Tissue", "productsHumanTissue"],
  ["Paraffin", "productsParaffin"],
  ["OCT", "productsOCT"],
  ["Paraffin Section", "productsParaffinSection"],
  ["OCT Section", "productsOCTSection"],
  ["Monkey Tissue 1", "productsMonkeyTissue1"],
  ["Monkey Tissue 2", "productsMonkeyTissue2"],
  ["Monkey Tissue OCT","productsMonkeyTissueOCT"],
  ["Monkey Tissue OCT Section","productsMonkeyTissueOCTSection"],
  ["Monkey Tissue FFPE Section", "productsMonkeyTissueFFPESection"],
  ["Cell Isolation Human", "productsCellIsolationHuman"],
  ["Cell Isolation Monkey", "productsCellIsolationMonkey"],
  ["Cell Isolation Dog", "productsCellIsolationDog"],
  ["Cell Isolation Rat", "productsCellIsolationRat"],
  ["Cell Isolation Mouse", "productsCellIsolationMouse"],
  ["Cell Isolation Mini Pig", "productsCellIsolationMiniPig"],
  ["Cell Isolation Rabbit", "productsCellIsolationRabbit"],
  ["Cell Isolation Feline", "productsCellIsolationFeline"],
  ["Cell Isolation Alpaca", "productsCellIsolationAlpaca"],
  ["Accessories Cell Isolation", "productsAccessoriesCellIsolation"],
  ["Magnet", "productsMagnet"],
  ["Lentivirus", "productsLentivirus"],
  ["Medium And Supplement", "productsMediumAndSupplement"],
  ["PBMC Human", "productsPBMCHuman"],
  ["PBMC Monkey", "productsPBMCMonkey"],
  ["PBMC Dog", "productsPBMCDog"],
  ["PBMC Rat", "productsPBMCRat"],
  ["PBMC Mouse", "productsPBMCMouse"],
  ["PBMC Minipig", "productsPBMCMinipig"],
  ["PBMC Rabbit", "productsPBMCRabbit"],
  ["PBMC Feline", "productsPBMCFeline"],
  ["PBMC Guinea Pig", "productsPBMCGuineaPig"],
  ["Accessories Primary Cells", "productsAccessoriesPrimaryCells"]
];

// Create product tables dynamically

function createTable(tableId, dataArray) {
  let table = document.getElementById(tableId);
  let thead = "<tr>" + headers.slice(0, 3).map(h => `<th>${h}</th>`).join("") + "</tr>";
  let rows = dataArray.map(row =>
    "<tr>" + row.slice(0, 3).map(col => `<td>${col}</td>`).join("") + "</tr>"
  ).join("");
  table.innerHTML = thead + rows;
}



// Create the accordion container
const container = document.getElementById("accordionContainer");
container.innerHTML = `
  <div class="accordion" id="mainAccordion">
    ${accordionSections.map(([title, id], index) => `
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading-${id}">
          <button class="accordion-button ${index !== 0 ? 'collapsed' : ''}"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse-${id}"
            aria-expanded="${index === 0}"
            aria-controls="collapse-${id}">
            ${title}
          </button>
        </h2>
        <div id="collapse-${id}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}">
          <div class="accordion-body">
            <input type="text" class="form-control mb-2" placeholder="Search ${title}..." 
                   onkeyup="filterTable('${id}', this.value)">
            <table id="${id}" class="table table-bordered table-sm"></table>
          </div>
        </div>
      </div>
    `).join("")}
  </div>
`;

// Create tables (you can extend this list)
createTable("productsTableSerum", BlankSerum);
createTable("productsTablePlasma", BlankPlasma);
createTable("productsTableBile", BlankBile);
createTable("productsTableLiver", BlankLiverTissue);
createTable("productsBiologicalMatrix",AlternativeBiologicalMatrix);
createTable("productsVitreousHumor", VitreousHumor);
createTable("productsBlankAqueousFluid",BlankAqueousFluid);
createTable("productsMarrow",Marrow);
createTable("productsMilk", Milk);
createTable("productsCerebrospinalFluid", CerebrospinalFluid);
createTable("productsSterileProduct", SterileProduct);
createTable("productsOrganizationalHomogenizationProducts", OrganizationalHomogenizationProducts);
createTable("productsHumanTissue", HumanTissue);
createTable("productsParaffin", Paraffin);
createTable("productsOCT", OCT);
createTable("productsParaffinSection", ParaffinSection);
createTable("productsOCTSection", OCTSection);
createTable("productsMonkeyTissue1", MonkeyTissue1);
createTable("productsMonkeyTissue2", MonkeyTissue2);
createTable("productsMonkeyTissueOCT",MonkeyTissueOCT);
createTable("productsMonkeyTissueOCTSection", MonkeyTissueOCTSection);
createTable("productsMonkeyTissueFFPESection", MonkeyTissueFFPESection);
createTable("productsCellIsolationHuman", CellIsolationHuman);
createTable("productsCellIsolationMonkey", CellIsolationMonkey);
createTable("productsCellIsolationDog", CellIsolationDog);
createTable("productsCellIsolationRat", CellIsolationRat);
createTable("productsCellIsolationMouse", CellIsolationMouse);
createTable("productsCellIsolationMiniPig", CellIsolationMiniPig);
createTable("productsCellIsolationRabbit", CellIsolationRabbit);
createTable("productsCellIsolationFeline", CellIsolationFeline);
createTable("productsCellIsolationAlpaca", CellIsolationAlpaca);
createTable("productsAccessoriesCellIsolation", AccessoriesCellIsolation);
createTable("productsMagnet", Magnet);
createTable("productsLentivirus", Lentivirus);
createTable("productsMediumAndSupplement", MediumAndSupplement);
createTable("productsPBMCHuman", PBMCHuman);
createTable("productsPBMCMonkey", PBMCMonkey);
createTable("productsPBMCDog", PBMCDog);
createTable("productsPBMCRat", PBMCRat);
createTable("productsPBMCMouse", PBMCMouse);
createTable("productsPBMCMinipig",PBMCMinipig);
createTable("productsPBMCRabbit", PBMCRabbit);
createTable("productsPBMCFeline", PBMCFeline);
createTable("productsPBMCGuineaPig", PBMCGuineaPig)
createTable("productsAccessoriesPrimaryCells", AccessoriesPrimaryCells);

// ==============================
//  Search + Highlight Logic
// ==============================

// Remove highlight when accordion closes
document.addEventListener("hidden.bs.collapse", e => {
  e.target.querySelectorAll(".search-highlight").forEach(el => el.classList.remove("search-highlight"));
});

// Table filter inside each accordion
function filterTable(tableId, searchText) {
  const table = document.getElementById(tableId);
  const rows = table.getElementsByTagName("tr");
  const query = searchText.toLowerCase();

  for (let i = 1; i < rows.length; i++) {
    const rowText = rows[i].innerText.toLowerCase();
    rows[i].style.display = rowText.includes(query) ? "" : "none";
  }
}

// Highlight helper
function highlightElement(el) {
  if (el) el.classList.add("search-highlight");
}

// Red warning toast for not found case
function showWarningToast(message) {
  const toastEl = document.getElementById("searchWarningToast");
  const toastMsg = document.getElementById("toastMessage");
  if (!toastEl || !toastMsg) {
    alert(message);
    return;
  }
  toastMsg.textContent = message;
  new bootstrap.Toast(toastEl, { delay: 3000 }).show();
}

// ==============================
//  Run search on page load
// ==============================
document.addEventListener("DOMContentLoaded", async () => {
  const query = localStorage.getItem("productSearchQuery");
  if (!query) return;
  localStorage.removeItem("productSearchQuery"); // use once

  console.log("[Search] Received query:", query);

  // Wait until tables exist
  const waitForTables = () => new Promise(res => {
    const check = setInterval(() => {
      if (document.querySelectorAll("table").length) {
        clearInterval(check);
        res();
      }
    }, 50);
  });
  await waitForTables();

  // Remove old highlights
  document.querySelectorAll(".search-highlight").forEach(el => el.classList.remove("search-highlight"));

  const lowerQuery = query.toLowerCase();
  const cells = document.querySelectorAll("td");
  let firstMatch = null;
  let found = false;

  cells.forEach(td => {
    if (td.textContent.toLowerCase().includes(lowerQuery)) {
      const tr = td.closest("tr");
      const collapse = td.closest(".accordion-collapse");

      // Instantly open accordion (no animation)
      if (collapse && !collapse.classList.contains("show")) {
        collapse.classList.add("show");
        const btn = collapse.previousElementSibling?.querySelector(".accordion-button");
        if (btn) btn.classList.remove("collapsed");
      }

      // Highlight immediately
      highlightElement(tr);
      if (!firstMatch) firstMatch = tr;
      found = true;
    }
  });

  if (!found) {
    showWarningToast(`⚠️ No product found for "${query}"`);
    return;
  }

  // Smooth scroll to first match
  setTimeout(() => {
    firstMatch?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 300);
});


function handleSearch() {
  console.debug('in handleSearch');
  const query = document.getElementById("navbarSearchInput").value.trim();
  console.log("query:", query);

  if (!query) return;

  // If we are already on iphaseProducts.html → perform search directly
  if (window.location.pathname.includes("iphaseProducts.html")) {
    performLocalSearch(query);
  } else {
    // If coming from another page → store and redirect
    localStorage.setItem("productSearchQuery", query);
    window.location.href = "iphaseProducts.html";
  }
}

function performLocalSearch(query) {
  // Remove old highlights
  document.querySelectorAll(".search-highlight").forEach(el => el.classList.remove("search-highlight"));

  const lowerQuery = query.toLowerCase();
  const cells = document.querySelectorAll("td");
  let firstMatch = null;
  let found = false;

  cells.forEach(td => {
    if (td.textContent.toLowerCase().includes(lowerQuery)) {
      const tr = td.closest("tr");
      const collapse = td.closest(".accordion-collapse");

      // Instantly open accordion
      if (collapse && !collapse.classList.contains("show")) {
        collapse.classList.add("show");
        const btn = collapse.previousElementSibling?.querySelector(".accordion-button");
        if (btn) btn.classList.remove("collapsed");
      }

      // Highlight the row immediately
      highlightElement(tr);
      if (!firstMatch) firstMatch = tr;
      found = true;
    }
  });

  if (!found) {
    showWarningToast(`⚠️ No product found for "${query}"`);
    return;
  }

  // Smooth scroll to first match
  firstMatch?.scrollIntoView({ behavior: "smooth", block: "center" });
}

// Expand / Contract All accordions
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleAllBtn");
  if (!toggleBtn) return;

  let expanded = false; // track global state

  function updateButtonText() {
    const accordions = document.querySelectorAll(".accordion-collapse");
    const total = accordions.length;
    const openCount = Array.from(accordions).filter(acc => acc.classList.contains("show")).length;

    // Only update text when all are expanded or all are collapsed
    if (openCount === total) {
      expanded = true;
      toggleBtn.textContent = "Contract All";
    } else if (openCount === 0) {
      expanded = false;
      toggleBtn.textContent = "Expand All";
    }
    // if partially open, keep current button text as-is
  }

  toggleBtn.addEventListener("click", () => {
    const accordions = document.querySelectorAll(".accordion-collapse");
    accordions.forEach(acc => {
      const bsCollapse =
        bootstrap.Collapse.getInstance(acc) ||
        new bootstrap.Collapse(acc, { toggle: false });
      expanded ? bsCollapse.hide() : bsCollapse.show();
    });

    expanded = !expanded;
    toggleBtn.textContent = expanded ? "Contract All" : "Expand All";
  });

  // Watch for manual expand/collapse
  const accordionElements = document.querySelectorAll(".accordion-collapse");
  accordionElements.forEach(acc => {
    acc.addEventListener("shown.bs.collapse", updateButtonText);
    acc.addEventListener("hidden.bs.collapse", updateButtonText);
  });
});
