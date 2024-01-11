var products =[]
var carts =[]
async function getProducts(){
	// {
	// 	id: 1,
	// 	name: "Armani shirt",
	// 	price:1500,
	// 	rating:3,
	// 	image: "../../resources/images/C-1.png",
	// 	alt:"Blue shirt",
	// 	desc:"Quality Men Armani shirt, with Different color and size choices Order now to get",
	// },
	loading("addLoad");
	var p = await fetch("../api/product.php").then((resp)=> resp.json()).then(response=> response)
	loading("remove")
	products=p;
	await renderProducts(0);
	// console.log(p)
}
function nextClick1(starts){
	curr=starts;
	start=starts
	end=starts+6;
	// console.log(start,",", end)
	productContainer = document.getElementById("contain");
	productContainer.innerHTML="";
	bottomNavs = document.getElementsByClassName("BottomNavs")[0];
	bottomNavs.innerHTML="";
	renderProducts(starts);
}
var colors = ["#f9c830","#83a8dc","#7a4686","#76d9a2","#9bc538","#f5221d","#0f4b89","#0096c1","#3a4e5e","#e8011b"];
var start=0
var curr=1
var end = 6
var total = products.length
var perPage = 6
function nextClick(){
	start+=6;
	end+=6;
	if(end<total){
		curr++;
		productContainer = document.getElementById("contain");
		productContainer.innerHTML="";
		bottomNavs = document.getElementsByClassName("BottomNavs")[0];
		bottomNavs.innerHTML="";
		renderProducts(start);
		// console.log(start,",", end)
	}
}


function renderNavs(){
	productContainer = document.getElementById("contain");
	var navs = document.createElement('div')
	navs.className="BottomNavs"
	var nextBut = document.createElement('div')
	nextBut.className="NextBut"
	nextBut.innerHTML+="Next"
	nextBut.setAttribute("onclick", "nextClick()");
	var numCont = document.createElement('div')
	numCont.className="numCont"
	

	// var num2 = document.createElement('div')
	// num2.className="navNums"

	var co = Math.ceil(products.length/6);
	for(i=0;i<co;i++){
		var num = document.createElement('div')
		num.className="navNums"
		try{
			var unBut = document.getElementsByClassName("bottomNavNums")[0];
			unBut.style.cssText=""
		}
		catch{
			// console.log("not found");
		}
		if(curr==i+1){
			num.className+=" bottomNavNum";
			num.style.cssText+=" cursor:default;box-shadow:none;";
			// console.log("Error")
		}
		var k=6*i;
		num.setAttribute("onclick", `nextClick1(${k})`)
		num.innerHTML=i+1;
		numCont.append(num)
	} 

	// 
	// 
	// 
	// 
	// 
	// 
	

	navs.append(numCont)
	navs.append(nextBut)
	productContainer.after(navs)
}
function renderProducts(page){
	productContainer = document.getElementById("contain");
	// console.log(page)
	for(i=page; i<page+8; i++){
		productContainer.innerHTML+=`
		<div class="tile">
            <div class="img_container">
                <img src="${products[i].photo}" id="${products[i].pid}" class="${products[i].pid}" alt="">
                <ul class="action">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="nav_svg"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/></svg>
                        <span>add to wish list</span>
                    </li>
                    <li onclick="addToCart(products[${i}])">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="nav_svg"><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"/></svg>
                        <span>add to cart</span>
                    </li>
                    <li onclick="viewDetail(products[${i}], ${i})">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="nav_svg"><path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"/></svg>
                        <span>view detail</span>
                    </li>
                </ul>
            </div>
            <div class="content">
                <div class="product_name">
                    <h2>${products[i].name}</h2>
                </div>
                <div class="rating">
                    <h1>ETB ${products[i].price}</h1>
                    <div class="rating">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="star-svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="star-svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="star-svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="star-svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                    </div>
                </div>
            </div>
        </div>`;
	}
	renderNavs()
}
var cont 
var height 
var width 
function getAverageColor(imageElement, ratio) {
    const canvas = document.createElement("canvas")

    let height = canvas.height = imageElement.naturalHeight
    let width = canvas.width = imageElement.naturalWidth

    const context = canvas.getContext("2d")
    context.drawImage(imageElement, 0, 0)

    let data, length
    let i = -4,
        count = 0

    try {
        data = context.getImageData(0, 0, width, height)
        length = data.data.length
    } catch (err) {
        console.error(err)
        return {
            R: 246,
            G: 196,
            B: 46
        }
    }
    let R, G, B
    R = G = B = 0

    while ((i += ratio * 4) < length) {
        ++count

        R += data.data[i]
        G += data.data[i + 1]
        B += data.data[i + 2]
    }

    R = ~~(R / count)
    G = ~~(G / count)
    B = ~~(B / count)

    return {
        R,
        G,
        B
    }
}
function nextClick1(starts){
	curr=starts;
	start=starts
	end=starts+6;
	// console.log(start,",", end)
	productContainer = document.getElementById("contain");
	productContainer.innerHTML="";
	bottomNavs = document.getElementsByClassName("BottomNavs")[0];
	bottomNavs.innerHTML="";
	renderProducts(starts);
}
function viewDetail(obj, id){
	bod = document.body;
	try{
		elem = document.getElementById(obj.pid.toString())
		elem = document.getElementsByClassName(obj.pid.toString())[0]
	}
	catch{
		elem = document.getElementsByClassName(obj.pid.toString())[0]
	}
	console.log(obj,"____________________________")
	alert("HEreeee")
	// console.log(elem)
	var { R, G, B } = getAverageColor(elem, 1)
	bod.innerHTML+=`  
	<div class="wrapper">
	   <div class="product">
	     <div class="product-pop">
	      <div class="close" onclick="removePopup()">
	        <div id="bar1" class="bar-1" style="background-color:rgb(${R}, ${G},${B})"></div>
	        <div id="bar2" class="bar-2" style="background-color:rgb(${R}, ${G},${B})"></div>
	      </div>
	      <div id="product_img" class="product-item">    
	          <div id="conta">
	            <img src="${obj.photo}" id="img">
	          </div>
	        </div>
	        <div id="product_disc" class="product-detail" style="background-color:rgb(${R}, ${G},${B}); color: white; font-family: montserrat">
	           <h3 class="card_top_heading" style="font-size: 25px">${obj.name}</h3>
	           <p style="margin-top: 20px">${obj.description}</p>
	           <br>
	           <h3>Price:- <b>${obj.price} birr</b></h3>
	           <button class="order-btn" onclick="addToCart(products[${id}])">Add to cart</button>
	        </div>
			
	     </div>

	   </div>

  </div>`;
  cont = document.getElementById("conta");
	cont.style.cssText="position: relative"
	height = cont.height
	width = cont.width	
	zoom(R, G, B);
}
function removePopup(){
	var pop = document.getElementsByClassName("wrapper")[0];
	pop.remove();
}

function zoom(color){
	var i = document.createElement('div')
	i.style.cssText=`background-image: url(${img.src}); position: absolute; height: 140px; width: 140px;`
	i.setAttribute("class","zo")
	cont.append(i);
	img.onmouseenter= (e)=>{
		// console.log("in")
		i.className="zo clip displayBlock"
		// i.style.cssText+=`cursor: unset;`
		follow(i,event)
	}
	img.onmouseleave = ()=>{
		i.className="zo clip"
		// console.log("out")
	}
}


function follow(i,f, color){
	var imx = img.width
	var imy= img.height
	onmousemove= (e)=>{
		try{
			var image = document.getElementsByClassName("zo")[0]
			var mx = e.pageX
			var my = e.pageY
			var rect = f.target.getBoundingClientRect();
			var x = (e.clientX - rect.left)/ imx*100;
			var y = (e.clientY - rect.top)/ imy*100;
			if(x>100 || x<0){
				image.className="zo clip displayNone"
			}
			if(y>100 || y<0){
				image.className="zo clip displayNone"
			}
			// console.log(y," ",x)
			i.style.cssText+=`left:${x}%; top: ${y}%; background-position: ${x+10}% ${y}%;`;
			// console.log(e.pageY," ", e.pageX)
		}
		catch{
			// console.log("found error")
		}
		
	}
}
// renderProducts(0);

function displayCartBtn() {
	if (carts.length != 0 ) {
		var cartBtn = document.getElementById("cart")
		cartBtn.style.cssText= `
		width: 25px;
		border-radius: 50%;
		padding: 5px;
		background: radial-gradient(#e2bd4b91,#ebb713a6,#ebb7132e) !important;
		position: fixed;
		right: 0;
		top: 50%;
		z-index: 3;
		cursor: pointer;
		margin-right: 5px;`
	}
}
displayCartBtn()

function addToCart(obj){
	carts.push(obj)
	displayCartBtn()
}

function showCart() {
	var cart = document.getElementById("productCard")
	cart.innerHTML = `
	<div class="wrapper">
	<div class="product" style="background: rgba(0, 0, 0, 0.2);">
	  <div class="product-pop" style="height: 500px;">
	   <div class="close" onclick="removePopup()">
		 <div id="bar1" class="bar-1" style="background-color:black"></div>
		 <div id="bar2" class="bar-2" style="background-color:black"></div>
	   </div>
	   <div class="cartItems" style="
									width: 100%;
									display: flex;
									flex-direction: column;
									justify-content: flex-end;
									align-items: center;">
		   <div id="cartList" class="list" style="
									display: flex;
									flex-direction: column;
									width: 100%;
									justify-content: center;
									align-items: center;
									scrollbar-color: #e84118 #2f36400d;
										scrollbar-width: thin;
										overflow-y: scroll; 
									">
			   
		   </div>
		   <div id="cart_disc" class="cart-detail" style="
		   background-color: #ebb713; 
		   color: white; 
		   font-family: montserrat; 
		   opacity: 0.9;
		   border-radius: 20px;
		   text-align: center;
		   width: 100%;
		   height: 170px;
		   border-top-left-radius: 0;
		   border-top-right-radius: 0;
		   ">
			 <div style="width: 60%; margin:auto">
				 <h3 class="card_top_heading" style="font-size: 25px">Checkout</h3>
				 <h5 style="margin-top: 10px; width: 100%;"><span style="float: left;">sub total:</span><span style="float: right;"><span id="cart_total">950</span> ETB</span></h5><br>
				 <h5 style="margin-top: 10px; width: 100%;"><span style="float: left;">tax (5%):</span><span style="float: right;"><span id="cart_vat">9</span> ETB</span></h5><br>
				 <h4 style="margin-top: 10px; width: 100%;"><span style="float: left;">GRAND TOTAL:</span><span style="float: right;"><span id="cart_grand_total">959</span> ETB</span></h4>
				 <br>
				 <button class="order-btn" style="  margin-top: 10px !important;" onclick="login()">Checkout</button>
			 </div>
		  </div>
	   </div>
	  </div>

	</div>

</div>
		`
	renderCart()
}

function getCount (pid, obj) {
	var count = 0;
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].pid == pid) {
            count++;
        }
    }
    return count;
}

function renderCart() {
	var	cartList = document.getElementById("cartList")
	var total = 0
	cartList.innerHTML = ""
	if (carts.length == 0) {
		removePopup()
		var cartBtn = document.getElementById("cart")
		cartBtn.style.cssText= `display:none;`
	}
	var cart = carts.filter((value, index) => carts.indexOf(value) === index)
	cart.forEach(prod => {
		// getCount(prod.pid, carts)
		total += (getCount(prod.pid, carts))*(prod.price)
		cartList.innerHTML += `
		<div class="suggestion" style="background: radial-gradient(#e2bd4b91,#ebb713a6,#ebb7132e) !important; padding: 0 30px; width: 90%;;
		display: grid;
		justify-content: space-between;
		height: 6em;
		border-radius: 10px;
		cursor: pointer;
		grid-template-columns: 13% 41% 10% 22% 4%;
		text-align: center;
	  }">
                     <div class="image" style="
                                                width: 80px;
                                                height: 70px;
                                                object-fit: cover;
                                                overflow-x: hidden;
                                                overflow-y: hidden;">
                            <img src="${prod.photo}" alt="" style="
                                                            width: 100%;
                                                            height: 100%;">
                        </div>
                     <div class="discription" style="width: auto;"> 
                         <p>${prod.name}</p>
                         <div class="rating">
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="star-svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="star-svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="star-svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="star-svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                         </div>
                     </div>
                     <div class="quantity">
					 <label style="color: aliceblue;
					 text-transform: capitalize;
					 font-family: montserrat;"
					  for="fname">Quantity</label><br>
                         <input id="input_${prod.pid}" onchange="reRenderCart(${prod.pid},${prod.price})" style="width: 54px;
						 background: inherit;
						 color: aliceblue;
						 text-transform: capitalize;
						 font-family: montserrat;
						 border: 2px solid aliceblue;
						 border-radius: 5px;
						 margin: 2px;
						 padding: 5px;"  type="number" name="amount" value="${getCount(prod.pid, carts)}">
                     </div>
					 <div id="${prod.pid}" style="color: aliceblue;
					 text-transform: capitalize;
					 font-family: montserrat;">
	  					<h4>Unit Price: ${prod.price}</h4>
						<h5>${getCount(prod.pid, carts)} x ${prod.price} = <span id="value_${prod.pid}">${(getCount(prod.pid, carts))*(prod.price)}</span></h5>
					 </div>
                     <div class="remove_itm" style="width: 20px;" onclick="removeFromCart(${prod.pid})">
                       <?xml version="1.0" encoding="iso-8859-1"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 496 496" style="enable-background:new 0 0 496 496;" xml:space="preserve"><path style="fill:#B5092B94;" d="M496,248c0,136.8-111.2,248-248,248S0,384.8,0,248S111.2,0,248,0S496,111.2,496,248z"/><path style="fill:#89002700;" d="M248,0c136.8,0,248,111.2,248,248S384.8,496,248,496"/><path style="fill:#883549B5;" d="M72.8,72.8c96.8-96.8,253.6-96.8,350.4,0s96.8,253.6,0,350.4"/><g><path style="fill:#EEFFFF;" d="M321.6,333.6c-3.2,0-5.6-0.8-8-3.2l-148-148c-4.8-4.8-4.8-12,0-16.8s12-4.8,16.8,0l148,148 c4.8,4.8,4.8,12,0,16.8C328,332.8,324.8,333.6,321.6,333.6z"/><path style="fill:#EEFFFF;" d="M174.4,333.6c-3.2,0-5.6-0.8-8-3.2c-4.8-4.8-4.8-12,0-16.8l148-148c4.8-4.8,12-4.8,16.8,0 s4.8,12,0,16.8l-148.8,148C180,332.8,176.8,333.6,174.4,333.6z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                     </div>
                 </div>
		`
	})
	document.getElementById("cart_total").innerHTML=`${total}`
	document.getElementById("cart_grand_total").innerHTML=`${(total*0.05)+total}`
	document.getElementById("cart_vat").innerHTML=`${(total*0.05)}`
}

function reRenderCart(id, price) {
	var previousValue = parseInt(document.getElementById(("value_"+id)).innerHTML)
	var total = parseInt(document.getElementById("cart_total").innerHTML)


	id = id.toString()
	var input_id ="input_"+ id
	document.getElementById(id).innerHTML=" "
	var currAmount = document.getElementById(input_id).value
	document.getElementById(id).innerHTML=`
	</div id="${id}">
	<div style="color: aliceblue;
	text-transform: capitalize;
	font-family: montserrat;">
		 <h4>Unit Price: ${price}</h4>
	   <h5>${currAmount} x ${price} = <span id="value_${id}">${(currAmount)*(price)}</span></h5>
	</div>
	`
	total += ((currAmount*price)-previousValue)
	document.getElementById("cart_total").innerHTML=`${total}`
	document.getElementById("cart_grand_total").innerHTML=`${(total*0.05)+total}`
	document.getElementById("cart_vat").innerHTML=`${(total*0.05)}`
}

function removeFromCart(obj) {
	carts.pop(obj)
	renderCart()
}

function search_shrink() {
	if (document.getElementById("search_txt").value == "") {
		document.getElementById("search_txt").style.cssText=` width: 0;`
		document.getElementsByClassName("suggestion_box")[0].style.cssText=` display:none;`
	}
	if (document.getElementById("search_txt_large").value == ""){
		document.getElementById("search_txt_large").style.cssText=` width: 0;`
		document.getElementsByClassName("suggestion_box")[1].style.cssText=` display:none;`
	}
}
function search_extend() {
	document.getElementById("search_txt").style.cssText=` width: 70vw;`
	document.getElementById("search_txt_large").style.cssText=` width: 20vw;`
	if (document.getElementById("search_txt_large").value != "") suggestion()
}

function objToArray() {
	var array= [];
	for( let i=0; i<products.length; i++) {
		array.push((products[i].name).toLowerCase());
	}
	return array
}

function suggestion() {
	var element= document.getElementById("search_txt_large");
	filter(element.value)
	// element.addEventListener("onkeyup",filter(document.getElementById("search_txt_large").value))
}

function suggestion_small() {
	var element= document.getElementById("search_txt");
	filter(element.value)
	// element.addEventListener("onkeyup",filter(document.getElementById("search_txt_large").value))
}

function filter(val) {
	var data=objToArray();
	var index=[]
	for (let i=0; i<data.length; i++) {
		if (data[i].includes(val.toLowerCase())) {
			index.push(i);
		}
	}
	display(index);
	// console.log(index)
	return index;
}

function display(val) {
	for(let cl=0; cl<2; cl++) {
		var suggestionBox=document.getElementsByClassName("suggestion_box")[cl]
		suggestionBox.innerHTML=" ";
		if (val.length == 0) {
			suggestionBox.innerHTML+=`
			<div class="suggestion">
									<div class="discription" style="width:100%;"> 
										<p style="font-size:1.6vw">&nbsp&nbsp&nbsp :) NO RESULTS FOUND</p>
									</div>
								</div>
			`
		}
		for (let i=0; i<val.length; i++) {
			suggestionBox.innerHTML+=`
			<div class="suggestion" onclick="viewDetail(products[${val[i]}])">
									<img src="${products[val[i]].photo}" class="${products[val[i]].pid}" alt="">
									<div class="discription"> 
										<p>${products[val[i]].name}</p>
										<p>${products[val[i]].price}</p>
										<div class="rating">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="star-svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="star-svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="star-svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="star-svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
										</div>
									</div>
								</div>
			`
		}
		document.getElementsByClassName("suggestion_box")[cl].style.cssText=` display:flex;`
	}
}

function transiti() {
	var transit=document.getElementById("product_disc")
	transit.innerHTML=`
	           <h3 class="card_top_heading" style="font-size: 25px; text-align:center;">Log in</h3>
			   <form>
					<div class="form-box">
						<div class="row">
							<div class="input-box" >
								<input type="email" placeholder="Email" style="padding:var(--cardTextSize);">
							</div>
						</div>

						<div class="row">
							<div class="input-box">
								<input type="password" placeholder="Password" style="padding:var(--cardTextSize);">
							</div>
						</div>

						<div class="message">
							<div class="input-box">
							<button class="order-btn">LOG IN</button>
							</div>
						</div>
					</div>
				</form>
	`
}

function login() {
	var left=document.getElementById("product_img")
	var right=document.getElementById("product_disc")
	var keyframe1=[
		{transform:"translateX(0)"},
		{transform:"translateX(-10%)"},
		{transform:"translateX(0)"}
	];
	var keyframe2=[
		{transform:"translateX(0)"},
		{transform:"translateX(10%)"},
		{transform:"translateX(0)"}
	];
	var keyframe4=[
		{transform:"translateY(0)"},
		{transform:"translateY(-10%)"},
		{transform:"translateY(0)"}
	];
	var keyframe3=[
		{transform:"translateY(0)"},
		{transform:"translateY(10%)"},
		{transform:"translateY(0)"}
	];
	var option={
		duration:300,
		direction:'alternate'
	};
	if (window.innerWidth <=750) {
		left.animate(keyframe3,option);
		right.animate(keyframe4,option);
	}
	else {
		left.animate(keyframe2,option);
		right.animate(keyframe1,option);
	}
	transiti()
}

// **** check if user is logged in

function check_cookie_name(name) {
	var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
	if (match) {
		return JSON.parse(match[2]);
	}
	else{
		return {exist: false};
	}
}


function gohome() {
	window.location.href="./home-page.html"
}

function checkLog() {
	// console.log("the following")
	logData = (check_cookie_name("loginData"))
	// console.log(logData)
	if ((check_cookie_name("loginData")).exist) {
		// console.log("session in sequence")
		activateUser(logData.uid,logData.firstname, logData.lastname)
		return true;
	}
	else {
		// console.log("session empty")
		// log=JSON.parse(localStorage.getItem("loggedUser"));
		// activateUser(log);
		return false
	}
}

function activateUser(uid,first, last) {
	// console.log(typeof(first))
	// console.log(typeof(last))
	elemen=document.getElementById("logged_profile")
	elemen.style.cssText=`background: #e6e4f0; flex-direction: column;`
	elemen.innerHTML=`
	  <div class="top_profile_bar" style="display: flex; justify-content: center; align-items: center; justify-content:flex-start;" >
			<div class="profile_image" onclick="extendProfileMenu()">
				<img src=../../resources/usersData/${uid}/profile/profile.png alt="" style="cursor:pointer" >
			</div>
			<h2 onclick="extendProfileMenu()" style="cursor:pointer" >${first} ${last}</h2>
	  </div>
	`
}

// "../../resources/images/photo_2022-02-05_09-47-36.jpg"

function extendProfileMenu() {
	elemen=document.getElementById("logged_profile")
	elemen.style.cssText=`background: #e6e4f0; flex-direction: column;`
	elemen.innerHTML+=`
	<div class="top_profile_menu" id="profile_menu" onmouseleave="checkLog()">
		<a href="./profile.html">Profile Page</a>
		<span onclick="logOut()" style="cursor:pointer">Log Out</span>
  </div>
	`
}

function logOut() {
	// console.log("session cleared")
	elemen=document.getElementById("logged_profile")
	elemen.style.cssText=`background: none; flex-direction: row;`
	elemen.innerHTML=`
	<a href="./signup.html">Sign up</a>
	 <a href="./loginPage.html">Log in</a>
	`
	document.cookie = `loginData={}; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=../../; SameSite=None; secure`
	window.location.href="./home-page.html"
}
