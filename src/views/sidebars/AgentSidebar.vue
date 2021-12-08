<template>
     <div class="sidebar" data-color="purple" data-image="assets/img/full-screen-image-3.jpg">
        <!--

            Tip 1: you can change the color of the sidebar using: data-color="blue | azure | green | orange | red | purple"
            Tip 2: you can also add an image using data-image tag

        -->

        <div class="logo">
            <a href="http://www.creative-tim.com" class="logo-text">
                Agent
            </a>
        </div>
		<div class="logo logo-mini">
			<a href="http://www.creative-tim.com" class="logo-text">
				Agent
			</a>
		</div>

    	<div class="sidebar-wrapper">
            <div class="user">
                <div class="photo">
                    <img src="assets/img/default-avatar.png" />
                </div>
                <div class="info">
                    <a data-toggle="collapse" href="#collapseExample" class="collapsed">
                        Tania Andrew
                        <b class="caret"></b>
                    </a>
                    <div class="collapse" id="collapseExample">
                        <ul class="nav">
                            <li><a href="#">My Profile</a></li>
                            <li><a href="#">Edit Profile</a></li>
                            <li><a href="#">Settings</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <ul class="nav">
                <li class="active">
                    <a href="dashboard.html">
                        <i class="pe-7s-graph"></i>
                        <p>Dashboard</p>
                    </a>
                </li>
                <li>
                    <a data-toggle="collapse" href="#componentsExamples">
                        <i class="pe-7s-car"></i>
                        <p>Listing
                           <b class="caret"></b>
                        </p>
                    </a>
                    <div class="collapse" id="componentsExamples">
                        <ul class="nav">
                            <li>
                            
                            <a href="">
                              <i class="pe-7s-magic-wand"></i>
                            Create New</a></li>
                            <li><a href="components/grid.html">
                            <i class="pe-7s-car"></i>
                            My Listings</a></li>
                            <li><a href="components/icons.html">
                            
                            <i class="pe-7s-check"></i>
                            Approved</a></li>
                            <li><a href="components/notifications.html">
                            
                            <i class="pe-7s-note2"></i>
                            Reserved</a></li>
                            <li><a href="components/panels.html">
                            <i class=" pe-7s-attention"></i>
                           
                            Unlisted</a></li>
                  
                        </ul>
                    </div>
                </li>

   


                <li>
                    <a href="charts.html">
                        <i class="pe-7s-wallet"></i>
                        <p>Wallet</p>
                    </a>
                </li>

                <li>
                    <a href="calendar.html">
                        <i class="pe-7s-mail"></i>
                        <p>Messages</p>
                    </a>
                </li>

                <li>
                    <a href="calendar.html">
                        <i class="pe-7s-bell"></i>
                        <p>Notifications</p>
                    </a>
                </li>

                <li>
                    <a href="calendar.html">
                        <i class="pe-7s-comment"></i>
                        <p>Reviews</p>
                    </a>
                </li>

                <li>
                    <a href="calendar.html">
                        <i class="pe-7s-power"></i>
                        <p>Logout</p>
                    </a>
                </li>


           
            </ul>
    	</div>
    </div>
</template>
<script>
export default {
    name: "AgentSidebar"
}
</script>