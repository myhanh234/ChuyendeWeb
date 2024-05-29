
import { useState } from 'react';
import './App.css';
import Menu from './Menu';
import { httpPost, httpPostwithToken } from './HttpConfig';
import { CartContextValue } from './ContextProvider';
import { Link } from 'react-router-dom';
export default function Header() {
	const [mobile, setMobile] = useState('');
	const [password, setPassword] = useState('');
	const [respassword, setRePassword] = useState('');
	const [email, setEmail] = useState('');
	const [showCartPopup, setShowCartPopup] = useState(false);
	const [name, setName] = useState('');
	const [sign_in_up_model, setsignin_up_model] = useState('');
	const [cartData, dispatch] = CartContextValue()
	const signUpApi = () => {
		if (mobile === "") {
			alert("Vui lòng điền số điện thoại");
			return;
		} else if (name === "") {
			alert("Vui lòng điền họ tên");
			return;
		} else if (email === "") {
			alert("Vui lòng điền email");
			return;
		} else if (password === "") {
			alert("Vui lòng điền mật khẩu");
			return;
		} else if (respassword === "") {
			alert("Vui lòng điền lại mật khẩu ");
			return;
		} else if (password === respassword) {
			alert("Đăng ký thành công");
			return;
		}
		let jsonOBj = {
			"name": name,
			"mobile": mobile,
			"password": password,
			"email": email
		}

		httpPost("signup/user", jsonOBj)
			.then(res => res.json())
			.then((res) => {
				if (res.hasOwnProperty('id')) {
					alert("Registration success.please sign in");
					setMobile('');
					setPassword('');
					setRePassword("");
					setEmail("")
					setName('');
					setsignin_up_model('sign-in')//hide the sign up model.
				} else {
					alert(res['message']);
				}

				//console.log(res);

			}, error => {
				alert(error.message);
			}
			)
	}
	const showCartList = () => {

	}
	const getTotalAmount = () => {
		return cartData.cartItems.reduce((prevValue, currentValue) => prevValue + currentValue.price, 0);
	}
	const loginApi = () => {
		if (mobile == "") {
			alert("Vui lòng điền số điện thoại");
			return;
		} else if (password == "") {
			alert("Vui lòng điền mật khẩu");
			return;
		}
		let jsonOBj = { "mobile": mobile, "password": password }

		httpPost("login/user", jsonOBj)
			.then(res => res.json())
			.then((res) => {
				if (res['token'] != null) {
					localStorage.setItem("token", res['token']);//token
					localStorage.setItem("user_id", res['user_profile_details']['user_id']);//user_id
					setsignin_up_model('')//hide the sign up model.
					//getCategory();
				} else {
					alert(res['message']);
				}

				//console.log(res);

			}, error => {
				alert(error.message);
			}
			)
	}
	return (
		<>
			<div className="header" id="home1">
				<div className="container">

					<div className="w3l_login">
						{/* <a href="javascript:void(0)" onClick={() => setsignin_up_model('sign-in')} data-toggle="modal" data-target="#myModal88"><span className="glyphicon glyphicon-user" aria-hidden="true"></span></a> */}
						<ul>
							<li onClick={() => setsignin_up_model('sign-in')} className="resp-tab-item" aria-controls="tab_item-0"><span>Đăng nhập</span></li>
							<li onClick={() => setsignin_up_model('sign-up')} className="resp-tab-item" aria-controls="tab_item-1"><span>Đăng Ký</span></li>
						</ul>

					</div>
					<div className="w3l_logo">
						<h1><a href="#">THỜI TRANG VIỆT TIẾN<span>Hàng Việt Nam Chất Lượng Cao</span></a></h1>
					</div>
					<div className="search">
						<input className="search_box" type="checkbox" id="search_box" />

						<label onClick={() => setShowCartPopup(true)} className="icon-search" ><span className="glyphicon glyphicon-search" aria-hidden="true"></span></label>
						<div className="search_form">
							<form action="#" method="post">
								<input type="text" name="Search" placeholder="Search..." />
								<input type="submit" value="Send" />
							</form>
						</div>
					</div>
					<div className="cart cart box_1">
						<button onClick={() => setShowCartPopup(true)} className="w3view-cart" type="submit" name="submit" value="">
							<i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
							<span className="cart_count">{cartData.cartItems.length}</span>
						</button>

					</div>

				</div>

			</div>
			<Menu></Menu>
			<div className={(showCartPopup ? 'active' : '')} id="w3lssbmincart">
				<Link to={"/checkoutcart/"}>THÔNG TIN GIỎ HÀNG </Link>
				<div onClick={() => setShowCartPopup(false)} style={{ float: 'right', cursor: 'pointer' }}>ĐÓNG</div>
				<ul>
					{
						cartData.cartItems.map(cartObj => (
							<li key={cartObj.id} className="sbmincart-item sbmincart-item-changed">
								<div className="sbmincart-details-name">
									<a className="sbmincart-name">{cartObj.productName}</a>
									<ul className="sbmincart-attributes">
									</ul>
								</div>
								<div className="sbmincart-details-quantity">
									{/* <input data-sbmincart-idx="0" name="quantity_1" type="text" pattern="[0-9]*" value="1" autocomplete="off"/>        */}
									<span className="sbmincart-quantity">{cartObj.qty}</span>
								</div>
								<div className="sbmincart-details-remove">
									<button type="button" className="sbmincart-remove" data-sbmincart-idx="0">×</button>
								</div>
								<div className="sbmincart-details-price">
									<span className="sbmincart-price">{cartObj.price}</span>
								</div>
							</li>
						))
					}


				</ul>
				<div>
					<span>TỔNG GIÁ TIỀN : </span>

					<span>{getTotalAmount()} .VND</span>
				</div>

			</div>

			<div className={"modal " + sign_in_up_model} id="myModal88" >
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<div className="modal-header">
							<button onClick={() => setsignin_up_model('')} type="button" className="close" data-dismiss="modal" aria-hidden="true">
								&times;</button>
							<h4 className="modal-title" id="myModalLabel">
								{(sign_in_up_model == 'sign-in') ? "Chào mừng bạn hãy đăng nhập !" : "Bạn chưa có tài khoản hãy đăng ký !"}
							</h4>
						</div>
						<div className="modal-body  modal-body-sub">
							<div className="row">
								<div className="col-md-8 modal_body_left modal_body_left1">
									<div className="sap_tabs">
										<div id="horizontalTab">
											{/* <ul>
												<li onClick={() => setsignin_up_model('sign-in')} className="resp-tab-item" aria-controls="tab_item-0"><span>Đăng nhập</span></li>
												<li onClick={() => setsignin_up_model('sign-up')} className="resp-tab-item" aria-controls="tab_item-1"><span>Đăng Ký</span></li>
											</ul> */}
											<div className="tab-1 sign-in resp-tab-content" aria-labelledby="tab_item-0">
												<div className="facts">
													<div className="register">

														<form action="#" method="post">
															<input onChange={(e) => setMobile(e.target.value)} name="Mobile" placeholder="Nhập SDT" type="text" required="" />
															<input onChange={(e) => setPassword(e.target.value)} name="Password" placeholder="Nhập Mật Khẩu" type="password" required="" />
															<div className="sign-up">
																<input className="btn" onClick={() => loginApi()} type="button" value="Đăng Nhập" />
															</div>
														</form>
													</div>
												</div>
											</div>
											<div className="tab-2 sign-up resp-tab-content" aria-labelledby="tab_item-1">
												<div className="facts">
													<div className="register">

														<form action="#" method="post">
															<input onChange={(e) => setName(e.target.value)} placeholder="Nhập Tên" name="Name" type="text" required="" />
															<input onChange={(e) => setEmail(e.target.value)} placeholder="Nhập Mail" name="Email" type="email" required="" />
															<input onChange={(e) => setMobile(e.target.value)} placeholder="Nhập SDT" name="mobile" type="text" required="" />
															<input onChange={(e) => setPassword(e.target.value)} placeholder="Nhập Mật Khẩu" name="Password" type="password" required="" />
															<input onChange={(e) => setRePassword(e.target.value)} placeholder="Xác Nhận Lại Mật Khẩu" name="Password" type="password" required="" />
															<div className="sign-up">
																<input className="btn" onClick={() => signUpApi()} type="button" value="Đăng Ký" />
															</div>
														</form>
													</div>
												</div>
											</div>
										</div>
									</div>


								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}


