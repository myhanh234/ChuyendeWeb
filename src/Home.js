
import { useEffect, useState } from 'react';
import './App.css';
import Menu from './Menu';
import { httpPost, httpPostwithToken } from './HttpConfig';
import { CartContextValue } from './ContextProvider';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
function Home() {

	const [categoryList, setCategoryList] = useState([]);
	const [productList, setProductList] = useState([]);
	const [cartData, dispatch] = CartContextValue()
	useEffect(() => {
		//TODO check user login
		getCategory();
		getCartApi()
	}, [])

	const getCartApi = () => {
		httpPostwithToken("addtocart/getCartsByUserId", {})
			.then((res) => {
				res.json().then(data => {
					if (res.ok) {
						dispatch({
							"type": "add_cart",
							"data": data
						})

					} else {
						alert(data.message)
					}
				})
			}, error => {
				alert(error.message);
			}
			)
	}
	const addCartApi = (productObj) => {
		let obj = {
			"productId": productObj.id,
			"qty": "1",
			"price": productObj.price

		}
		httpPostwithToken("addtocart/addProduct", obj)
			.then((res) => {
				res.json().then(data => {
					if (res.ok) {
						dispatch({
							"type": "add_cart",
							"data": data
						})
						alert("Đã thêm thành công")
					} else {
						alert(data.message)
					}
				})
			}).catch(function (res) {
				console.log("Error ", res);
				//alert(error.message);
			}
			)
	}
	const getCategory = () => {
		httpPostwithToken("product/getAllCategory", {}).
			then((res) => {
				res.json().then(response => {
					if (res.ok) {
						setCategoryList(response);
						getProductsByCategory(response[0].id);
					} else {
						alert("Lỗi chưa kết nối API")
					}
				})


			})
	}
	const getProductsByCategory = (cat_id) => {
		let obj = {
			"cat_id": cat_id
		}

		httpPostwithToken("product/getProductsByCategory", obj)
			.then((res) => {
				res.json().then(response => {
					if (res.ok) {
						if (response.length > 0) {
							setProductList(response)
						} else {
							alert("No product found..");
						}
					} else {
						setProductList([])
						alert("No product found..");
					}
				})
			}, error => {
				alert(error.message);
			}
			)
	}

	return (
		<>
			<Header />
			<div>


				<div className="banner">

				</div>

				<div className="banner-bottom">
					<div className="container">

						<div className="col-md-7 wthree_banner_bottom_right">
							<div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
								<ul id="myTab" className="nav nav-tabs" role="tablist">
									{
										categoryList.map((category) => (
											<li onClick={(e) => getProductsByCategory(category.id)} key={category.id} role="presentation">
												<a href="javascript:void(0)">{category.name}</a>
											</li>
										))
									}


								</ul>
								<div id="myTabContent" className="tab-content">
									<div role="tabpanel" className="tab-pane fade active in" id="home" aria-labelledby="home-tab">
										<div className="agile_ecommerce_tabs">
											{
												productList.map((product) => (

													<div className="col-md-4 agile_ecommerce_tab_left">
														<div className="hs-wrapper">
															<img src="../assets/images/3.jpg" alt=" " className="img-responsive" />
															<img src="../assets/images/4.jpg" alt=" " className="img-responsive" />

															<div className="w3_hs_bottom">
																<ul>
																	<li>
																		<a href="#" data-toggle="modal" data-target="#myModal">
																			Xem</a>
																	</li>
																</ul>
															</div>
														</div>
														<h5>
															<Link to={"/product/" + product.id}>{product.name}</Link>


														</h5>
														<h5><a onClick={() => addCartApi(product)} href="javascript:void(0)"> Mua Ngay</a></h5>
														<div className="simpleCart_shelfItem">
															<p><i className="item_price">Giá: {product.price}</i></p>
														</div>
													</div>
												))
											}

											<div className="clearfix"> </div>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="newsletter">
					<div className="container">
						<div className="col-md-6 w3agile_newsletter_left">
							<h3>HÃY ĐẾN VỚI CHÚNG TÔI</h3>
							<p>THƯƠNG HIỆU NỔI TIẾNG TẠI VIỆT NAM</p>
						</div>
						<div className="col-md-6 w3agile_newsletter_right">
							<form action="#" method="post">
								<input type="email" name="Email" placeholder="Email" required="" />
								<input type="submit" value="" />
							</form>
						</div>
						<div className="clearfix"> </div>
					</div>
				</div>
			</div>

			<Footer />
		</>

	);
}

export default Home;
