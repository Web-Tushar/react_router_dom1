import React from 'react'

const Footer = () => {
  return (
    <footer id="footer">
    <div class="footer_wrapper">
      <div class="footer_img">
        <img src="./images/footer-image 1.png" alt="no_found"/>
      </div>
      
      <div class="footer_content">
       <div class="footer_content_wrapper">
        <div class="footer_item">
          <div class="footer_logo">
            <img src="./images/logo1.png" alt="not_found"/>
           </div>
           <a href="#" class="common_btn">Join Our Club</a>
         </div>
         <div class="footer_text">
          <p class="paragraph">Dolor sit amet ipsum consectetur adipiscing elit sed eiusmod tempor 
            incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse 
            ultrices ipsum sed dolor.</p>
         </div>
       </div>
       <div class="footer_line"></div>
       <div class="footer_content2">
        <div class="footer_head">
          <h3>Contact Us</h3>
        </div>
        <div class="footer_p">
          <p class="paragraph">586 Avada Avenue, Avadaville 30221 - USA</p>
          <p class="paragraph">Email: ext-sports@my-domain.com</p>
          <p class="paragraph"> Phone: +8801757605573</p>
        </div>
       </div>
         
      </div>
      
    </div>


  </footer>

  )
}

export default Footer