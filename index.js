$(document).ready((e)=>{
  if((window.location.href).includes("?id=")){
    var url = (window.location.href).replace('https://safarov-sh.github.io/qurilish-mollari/?id=', '');
    console.log(url)
    Slide.forEach(m=>{
      if(m.type==url){
              $('.cardd').append(`
  <div class="col-3 mb-4">
    <div class="card shadow-sm h-100 border-0">
      <img src="${m.img}" class="card-img-top" style="height: 250px;width: 280px;margin: auto" alt="${m.name}">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title text-primary">${m.name}</h5>
        <p class="card-text text-muted small mb-3">${m.price} so'm</p>
        <div class="mt-auto d-flex justify-content-between">
          <a class="btn btn-sm btn-outline-success py-2 px-3" onclick="base(${m.id})"><i class="bi bi-cart4"></i></a>
          <button class="btn btn-sm btn-outline-warning" onclick="window.location.href = './view.html?id=${m.id}'">Batafsil</button>
        </div>
      </div>
    </div>
  </div>
`);
              }
    })
  }else{
    Slide.forEach(m=>{
              $('.cardd').append(`
  <div class="col-3 mb-4">
    <div class="card shadow-sm h-100 border-0">
      <img src="${m.img}" class="card-img-top" style="height: 250px;width: 280px;margin: auto" alt="${m.name}">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title text-primary">${m.name}</h5>
        <p class="card-text text-muted small mb-3">${m.price} so'm</p>
        <div class="mt-auto d-flex justify-content-between">
          <a class="btn btn-sm btn-outline-success py-2 px-3" onclick="base(${m.id})"><i class="bi bi-cart4"></i></a>
          <button class="btn btn-sm btn-outline-warning" onclick="window.location.href = './view.html?id=${m.id}'">Batafsil</button>
        </div>
      </div>
    </div>
  </div>
`);

    })}


    $('#modall').click(()=>{
      $('#exampleModalLabel').text(`Sizning savatingizda mavjud: ${JSON.parse(localStorage.getItem('base')).length} ta mahsulot`)
      $('.ul').html('')
      var priced = 0;
      
      
      Base.forEach(m=>{
        let product = Slide.find(k=>k.id == m.product_id)
priced = priced + (m.soni*product.price)
      $('.ul').append(`
        <li class="d-flex li" style="width: 100%;padding-bottom: 10px;border-bottom: 1px solid #eee;" id="item-${m.id}">
        <small style="display: none">${m.id}</small>
          <img src="${product.img}" style="width: 10%;">
          <div class="info" style="padding-left: 20px;width: 70%;">
            <span style="font-size: 25px;font-weight: 700;">${product.name} <a style="font-weight: 500;margin-left: 8px;color: darkblue">${m.soni>1?m.soni+'ta':''}</a></span>
            <p style="color: gray;font-family: monospace;">${product.info}</p>
          </div>
          <div style="display: block;width: 20%">
          <div class="remove" style="width: 100%;display: flex;justify-content: end;margin-bottom: 40px;padding-top: 4px"><i class="bi bi-x-lg remove-item"></i></div>
          <div class="price d-flex" style="width: 100%;justify-content: end;font-size: 25px;font-weight: 500;"><span style="margin-right: 3px;font-weight: 1000;">${product.price}</span> So'm</div>
        </div>
        </li>
        `)
$('#priced').text(priced)
        });
        $('.clear-base').click(()=>{
          localStorage.removeItem('base')
          $('.closee').click()
          window.location.reload()
        })
        $('.remove-item').click((e)=>{
          $(e.target.closest('li')).remove()
          var id = parseInt($(e.target).closest('li').find('small').text());
          Base = Base.filter(item => item.id !== id);
localStorage.setItem('base', JSON.stringify(Base))
        })
    })
})
setInterval(()=>{
  
    if(localStorage.getItem('base')){
      var badgem = 0;
      JSON.parse(localStorage.getItem('base')).forEach(m=>{
        badgem = badgem + m.soni;
      })
      $('#badge').text(badgem)
    }else{
      $('#badge').text(0)
    }
}, 100)
function base(id){
  var status = true;
  Base.forEach(m=>{
    if(m.product_id==id){
      m.soni = m.soni+1;
status = false;
    }
    });
if(status){
  Base.push({
id: Base.length+1,
product_id: id,
soni: 1,
  })
  }
localStorage.setItem('base', JSON.stringify(Base))

    }
