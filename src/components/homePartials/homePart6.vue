<template>
    <div class="home-Part6">
	  <div class="container d-flex justify-content-start flex-wrap flex-column text-center pb-2">
		  <h1 class="title">what we offer</h1>
		  <p>Maximize reservations, boost revenue and increase occupancy by adding social group trips to your vacation rental.</p>
	  </div>
	  <div class="container">
		  <div class="travel-packages">
			  <div>
				  <div class="sub-head-section">
					  <img src="../../../src/assets/images/logo_color_black.png" alt="">
					  <h3>FREE</h3>
				  </div>
				  <p></p>
				  <p class="package-list">Social Media verification and online reputation of travelers <span class="bullet">?</span> </p>
				  <p class="package-list">Relocation guaranteed <span class="bullet">?</span> </p>
				  <p class="package-list">Dealing with a trusted community <span class="bullet">?</span> </p>
				  <p class="package-list">Join other travelers with your same interests and affinities <span class="bullet">?</span> </p>
				  <p class="package-list">Splitting the cost in accomodation of trusted way  <span class="bullet">?</span> </p>
				  <p class="package-list">Travelling earn extra money  <span class="bullet">?</span> </p>
			  </div>
			  <div>
				  <div class="sub-head-section">
					  <img src="../../../src/assets/images/booking.png">
					  <h3>no free</h3>
				  </div>
				  <ul class="cross-bulet">
					  <li><div>X</div></li>
					  <li><div>X</div></li>
					  <li><div>X</div></li>
					  <li><div>X</div></li>
					  <li><div>X</div></li>
					  <li><div>X</div></li>
				  </ul>
				  
			  </div>
			  <div>
				  <div class="sub-head-section">
					  <img src="../../../src/assets/images/airbnb.png">
					  <h3>15% free</h3>
				  </div>
				  <ul class="cross-bulet">
					  <li><div>X</div></li>
					  <li><div>X</div></li>
					  <li><div>X</div></li>
					  <li><div>X</div></li>
					  <li><div>X</div></li>
					  <li><div>X</div></li>
				  </ul>
			  </div>
			  <div>
				  <div class="sub-head-section">
					  <img src="../../../src/assets/images/home-away.png">
					  <h3>10% free</h3>
				  </div>
				  <ul class="cross-bulet">
					  <li><div>X</div></li>
					  <li><div>X</div></li>
					  <li><div>X</div></li>
					  <li><div>X</div></li>
					  <li><div>X</div></li>
					  <li><div>X</div></li>
				  </ul>
			  </div>
		  </div>
	  </div>
    </div>
</template>

<script>
    export default {
        name: "home-part6"
    }
</script>

<style scoped lang="scss">
	$theme:#FF5860;
	.home-Part6{
		padding: 50px 0;
		.title{
			font-size: 2rem;
			font-weight: 500;
			color: #252524;
			text-transform: capitalize;
		}
		.travel-packages{
			display: flex;
			justify-content: center;
			align-items: flex-start;
			flex-wrap: wrap;
			div{
				flex: 2;
				margin:10px;
				background:$theme;
				padding: 0 0 28px 0;
				.cross-bulet{
					padding: 0;
					display: flex;
					align-items: center;
					flex-direction: column;
					margin: 0;
					li{
						list-style: none;
						div{
							height: 29px;
							width: 28px;
							border-radius: 100%;
							text-align: center;
							padding: 2px;
							color: #fff;
						}
					}
				}
				.sub-head-section{
					display: flex;
					flex-direction: column;
					align-items: center;
					padding: 16px 0;
					background-color: #fff;
					min-height: 123px;
					min-width: 186px;
					justify-content: space-around;
					h3{
						text-align: center;
						text-transform: capitalize;
						font-size: 22px;
					}
					img{
						width:82%;
						padding-bottom: 10px;
					}
				}
				.package-list{
					color: #fff;
					font-size: 14px;
					line-height: 35px;
					text-align: center;
					margin: 0 auto;
					padding: 0 17px;
					width: 90%;
					position: relative;
					.bullet{
						background: #fff;
						padding: 0 6px;
						color: $theme;
						border-radius: 100%;
						font-size: 13px;
					}
				}
				 &:nth-child(2){
					 flex: 1;
					 background: #EAF3F0;
				 }
				 &:nth-child(3){
					 flex: 1;
					 background:#EAF3F0 ;
				 }
				 &:nth-child(4){
					 flex: 1;
					 background:#EAF3F0 ;
				 }
			 
			}
		}
	}
</style>
