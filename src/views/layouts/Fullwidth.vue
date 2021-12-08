<template>

<div class="wrapper wrapper-full-page">
    <div class="full-page login-page" data-color="purple" data-image="assets/img/full-screen-image-1.jpg">   
        
    <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
        <router-view></router-view>
    	
    	<footer class="footer footer-transparent">
            <div class="container">
                <nav class="pull-left">
                    <ul>
                        <li>
                            <a href="#">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Company
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#">
                               Blog
                            </a>
                        </li>
                    </ul>
                </nav>
                <p class="copyright pull-right">
                    &copy; 2021 <a href="http://www.creative-tim.com">Legit Car</a>
                </p>
            </div>
        </footer>

    </div>                             
       
</div>
</template>

<script>
export default {


    
}
</script>