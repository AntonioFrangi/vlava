fetch('http://localhost:1234/services')
  .then(response => response.json())
  .then(json =>{

      var allservices = document.getElementById('AllServices');
      var content =`<div >
                    <div class="icon"><i class="bi bi-briefcase"></i></div>
                    <h4 class="title"><a href="">Lorem Ipsum</a></h4>
                    <p class="description">Voluptatum </p>
                    </div>`
         for (let i = 0; i < json.length; i++) {
            var specificContent = content.replace("Lorem Ipsum",json[i].title)
            specificContent = specificContent.replace("Voluptatum",json[i].description)
            var singleService = document.createElement('div')
            singleService.className="col-lg-4 col-md-6 icon-box";
            singleService.innerHTML = specificContent;
            allservices.appendChild(singleService);  
         }             
  }
)