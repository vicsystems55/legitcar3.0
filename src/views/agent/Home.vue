<template>

<div class="container-fluid">

    <div class="row">
        <div class="col-md-12">
            <div class="card ">
                <div class="header">
                    <h4 class="title">Statistics</h4>
                    <p class="category"></p>
                </div>
                <div class="content">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="table-responsive">
                               
                            </div>
                        </div>
                        <div class="col-md-6 col-md-offset-1">
                            <div id="worldMap" style="height: 300px;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <div class="row">
        <div class="col-md-4">
            <div class="card">
                <div class="header">
                    <h4 class="title">Total Listings</h4>
                    <p class="category">All listings created</p>
                </div>
                <div class="content">
                    
                </div>
              

            </div>
        </div>

         <div class="col-md-4">
            <div class="card">
                <div class="header">
                    <h4 class="title">Reserved Listings</h4>
                    <p class="category">All listings reserved by buyers</p>
                </div>
                <div class="content">
                    
                </div>
              

            </div>
        </div>

        <div class="col-md-4">
            <div class="card">
                <div class="header">
                    <h4 class="title">Wallet Balance</h4>
                    <p class="category">Total amount in virtual wallet</p>
                </div>
                <div class="content">
                    
                </div>
              

            </div>
        </div>

      
    </div>



    <div class="row">
     

        <div class="col-md-6">
            <div class="card ">
                <div class="header">
                    <h4 class="title">Latest Messages</h4>
                    <p class="category">Messages from potential buyers</p>
                </div>
                <div class="content">
                    <div class="table-full-width">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td>
                                        <label class="checkbox">
                                            <input type="checkbox" value="" data-toggle="checkbox">
                                        </label>
                                    </td>
                                    <td>Sign contract for "What are conference organizers afraid of?"</td>
                                    <td class="td-actions text-right">
                                        <button type="button" rel="tooltip" title="Edit Task" class="btn btn-info btn-simple btn-xs">
                                            <i class="fa fa-edit"></i>
                                        </button>
                                        <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs">
                                            <i class="fa fa-times"></i>
                                        </button>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                

            </div>
        </div>

        <div class="col-md-6">
            <div class="card ">
                <div class="header">
                    <h4 class="title">Reviews</h4>
                    <p class="category">Messages from potential buyers</p>
                </div>
                <div class="content">
                    <div class="table-full-width">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td>
                                        <label class="checkbox">
                                            <input type="checkbox" value="" data-toggle="checkbox">
                                        </label>
                                    </td>
                                    <td>Sign contract for "What are conference organizers afraid of?"</td>
                                    <td class="td-actions text-right">
                                       
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                

            </div>
        </div>
    </div>



</div>
</template>
<script>
export default {
    
}
</script>