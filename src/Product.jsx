
import { useEffect, useState } from 'react';
import './App.css';
import Menu from './Menu';
import { httpPost, httpPostwithToken } from './HttpConfig';
import Footer from './Footer';
import Header from './Header';
export default function Product() {
	return (
		<>
			<Header />
			<div class="single">
				<div class="container">
					<div class="col-md-4 single-left">
						<div class="flexslider">
							<ul class="slides">
								<li data-thumb="images/a.jpg">
									<div class="thumb-image"> <img src="../assets/images/a.jpg" data-imagezoom="true" class="img-responsive" alt="" /> </div>
								</li>

							</ul>
						</div>
					</div>


					<div class="col-md-8 single-right">
						<h3>ÁO SƠ MI NGẮN 8N0242NT4/S4P</h3>
						<div class="rating1">
							<span class="starRating">
								<input id="rating5" type="radio" name="rating" value="5" />
								<label for="rating5">5</label>
								<input id="rating4" type="radio" name="rating" value="4" />
								<label for="rating4">4</label>
								<input id="rating3" type="radio" name="rating" value="3" checked />
								<label for="rating3">3</label>
								<input id="rating2" type="radio" name="rating" value="2" />
								<label for="rating2">2</label>
								<input id="rating1" type="radio" name="rating" value="1" />
								<label for="rating1">1</label>
							</span>
						</div>
						<div class="description">
							<h5><i>Chi Tiết Sản Phẩm</i></h5>
							<p> Thành phần	:	50% EUCALYPTUS TENCEL - 25% COTTON - 25% SPUN
								Phom dáng	:	REGULAR FIT
								Màu sắc	:	WHITE, YELLOW
								Kiểu dáng	:	TAY NGẮN
								Hoa văn	:	CARO</p>
							<p>Áo sơ mi caro tay ngắn Việt Tiến phom Regular, chất liệu Eucalyptus - Cotton - Spun có các tính năng như ít nhăn dễ ủi, kháng khuẩn, thấm hút tốt, thân thiện môi trường, mềm mịn, phù hợp với môi trường công sở hiện đại. Sản phẩm được phân phối tại các cửa hàng Việt Tiến khu vực phía Nam.</p>
						</div>


						<div class="simpleCart_shelfItem">
							<p><i class="item_price">Giá : 495.000 VNĐ</i></p>




						</div>
					</div>

				</div>
			</div>
			<Footer />
		</>
	)
}