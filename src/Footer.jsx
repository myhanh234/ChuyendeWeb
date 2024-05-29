
import './App.css';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="w3_footer_grids">
                    <div className="col-md-3 w3_footer_grid">
                        <h3>Liên hệ</h3>
                        <p>Khu phố 6 ,Phường Linh Trung, TP.Thủ Đức</p>
                        <ul className="address">
                            <li><i className="glyphicon glyphicon-map-marker" aria-hidden="true"></i>Tòa 3,Khoa CNTT  <span>Đại Học Nông Lâm Tp.Hồ Chí Minh</span></li>
                            <li><i className="glyphicon glyphicon-envelope" aria-hidden="true"></i><a href="mailto:info@example.com">20130274@st.hcmuaf.edu.vn</a></li>
                            <li><i className="glyphicon glyphicon-earphone" aria-hidden="true"></i>09864232452</li>
                        </ul>
                    </div>
                    <div className="col-md-3 w3_footer_grid">
                        <h3>thông tin</h3>
                        <ul className="info">
                            <li><a href="about.html">Về mặt hàng</a></li>
                            <li><a href="mail.html">Về địa chỉ</a></li>
                            <li><a href="codes.html">Về mã số</a></li>
                            <li><a href="faq.html">Về nơi sản xuất</a></li>
                            <li><a href="products.html">Về giá cả</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 w3_footer_grid">
                        <h3>mặt hàng</h3>
                        <ul className="info">
                            <li><a href="products.html">Áo Sơ Mi</a></li>
                            <li><a href="products1.html">Quần Tây</a></li>
                            <li><a href="products.html">Thắt Lưng</a></li>
                            <li><a href="products1.html">Cà Vạt</a></li>
                            <li><a href="products2.html">Giày Da</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 w3_footer_grid">
                        <h3>Profile</h3>
                        <ul className="info">
                            <li><a href="index.html">Trang Chủ</a></li>
                            <li><a href="products.html">Trang cuối</a></li>
                        </ul>
                        <h4>Tương Tác Với Chúng Tôi</h4>
                        <div className="agileits_social_button">
                            <ul>
                                <li><a href="#" className="facebook"> </a></li>
                                <li><a href="#" className="twitter"> </a></li>
                                <li><a href="#" className="google"> </a></li>
                                <li><a href="#" className="pinterest"> </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
            <div className="footer-copy">
                <div className="footer-copy1">
                    <div className="footer-copy-pos">
                        <a href="#home1" className="scroll"><img src="../assets/images/arrow.png" alt=" " className="img-responsive" /></a>
                    </div>
                </div>
                <div className="container">
                    <p>&copy; Bản quyền thuộc về Tô Thiên Hưng | Spring boot + ReactJs <a href="https://www.facebook.com/tothienhung">FB cá nhân</a></p>
                </div>
            </div>
        </div>
    )
}
export default Footer;