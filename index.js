

        var collegedata;
        var statedata;
        fetch('https://api.rootnet.in/covid19-in/hospitals/medical-colleges')
        .then((response)=>{
          return response.json();
        })
        .then((resp)=>{
          collegedata=resp.data.medicalColleges;
          console.log(collegedata);
          dropdown="";
        var options=new Set();
        collegedata.forEach((college)=>{
          options.add(college.state);
        })
        const arr=[...options];
        arr.sort();
        dropdown+=`<option>Select state</options>`
        arr.forEach((value)=>{
         dropdown+=`<option>${value}</options>`
        })
        $("#mylist").html(dropdown);
        })
        
       
        fetch('https://api.rootnet.in/covid19-in/hospitals/beds')
        .then((responce)=>{
            return responce.json();
        })
        .then((resp)=>{
            console.log(resp.data.regional);
            statedata=resp.data.regional;
        })
        
        function myfunction(){
            input= document.getElementById("mylist");
            console.log(input.value);
            cardbody="";
            intro="";
            statedata.forEach((state)=>{
                if(state.state==input.value){
                    console.log(state);
                    intro+=`<div class="intro" style="font-weight:bold; font-size:1.3rem">According to the data collected in 2017,<br>In ${state.state},there are:
                    <ul class="dash">
                    <li>${state.ruralHospitals} Rural Hospitals</li>
                    <li>${state.ruralBeds}  Beds in the Rural Hospitals</li>
                    <li>${state.urbanHospitals} Urban Hospitals</li>
                    <li>${state.urbanBeds} Beds in the Urban Hospitals</li>
                    </ul>
                    The prominent hospitals and megical colleges in ${state.state} are:
                    
                    </div>`
            }
          }
          )
      
 
  collegedata.forEach((college)=>{
    if(college.state==input.value){
      cardbody+=`<div class="hospital-card">
      <ul class="dash">
      <h4 class="card-heading">${college.name}</h4>
      <li class="card-subheading">City:${college.city}</li>
      <li class="card-subheading">Hospital beds: ${college.hospitalbeds=="undefined"?"Data unavailable":college.hospitalbeds}</li>
      <li class="card-subheading">Admission capacity: ${college.admissionCapacity=="undefined"?"Data unavailable":college.admissionCapacity}</li>
      <li class="card-subheading">Ownershipof the college:${college.ownership}</li>
      
      </ul></div>`
    }
  })
  console.log(cardbody);
  $("#stateintro").html(intro);
  $("#cards-list").html(cardbody);
  }




        


