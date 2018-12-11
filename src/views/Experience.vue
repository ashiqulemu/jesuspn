<template>
    <div class="experience">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="card" >
                        <div class="card-header">
                            Gallery
                        </div>
                        <div class="card-body">
                            gallery
                        </div>
                    </div>
                    <br>
                    <div class="card-header" style="border-bottom: none">
                        <div class="row justify-content-around">
                            <span class="active">Description</span>
                            <span>Amenities</span>
                            <span>Cancellation Policy</span>
                            <span>The Host & Location</span>
                            <span>Review</span>
                        </div>
                    </div>
                    <br>
                    <div class="card">
                        <div class="card-body">
                            <h4><i class="fas fa-map-marker-alt text-primary"></i> Fuerteventura Spain</h4>
                            <p class="text-black-50  strong">Date Trip-Sharing: 31 Oct 2018 - 02 Nov 2018</p>
                            <p>asdfasdfasdf</p>
                        </div>
                    </div>
                    <br>
                    <div class="card">
                        <div class="card-body">
                            <h4>Master Details</h4>
                            <div class="row">
                                <div class="col-3">
                                    <img src="https://via.placeholder.com/150" class="img-fluid">
                                </div>
                                <div class="col-9">
                                    test
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="card">
                        <div class="card-body">
                            <h4>Interests</h4>
                            <div class="row">
                                <div class="col-12">
                                    <button class="btn btn-outline-primary">Ourdoors Events</button>&nbsp;
                                    <button class="btn btn-outline-primary">Ourdoors Events</button>&nbsp;
                                    <button class="btn btn-outline-primary">Ourdoors Events</button>&nbsp;
                                    <button class="btn btn-outline-primary">Ourdoors Events</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="card">
                        <div class="card-body">
                            <h4>Perticipants</h4>
                            <div class="row">
                                <div class="col-3">
                                    <img src="https://via.placeholder.com/150" class="img-fluid">
                                </div>
                                <div class="col-9">
                                    <h5>Title</h5>
                                    <p class="text-primary"><i class="fas fa-map-marker-alt"></i><span>&nbsp;Gran Canaria joined to Peer2travel in 27 October</span></p>
                                    <a href="#">View Public Profile</a>
                                    <p></p>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <span>Reputation: </span><span class="text-norm">no verificated</span><br>
                                            <span>Total Ratings: </span><span class="text-norm">no reviews</span>
                                        </div>
                                        <div class="col-md-6">
                                            <span class="text-norm">Check in: </span><span>31 October 2018</span><br>
                                            <span class="text-norm">Check out: </span><span>02 November 2018</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <hr>
                                    <button class="btn btn-outline-primary">Ourdoors Events</button>&nbsp;
                                    <button class="btn btn-outline-primary">Ourdoors Events</button>&nbsp;
                                    <button class="btn btn-outline-primary">Ourdoors Events</button>&nbsp;
                                    <button class="btn btn-outline-primary">Ourdoors Events</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="card">
                        <div class="card-body">
                            <h4>Description</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquam animi architecto commodi consectetur dolores ea harum itaque, laudantium minus obcaecati placeat quam sed similique sit soluta temporibus velit.</p>
                        </div>
                    </div>
                    <br>
                    <div>
                        <div class="card">
                            <div class="card-body">
                                <h4>Amenities</h4>
                                <div class="row">
                                    <div class="col-md-4">

                                    </div>
                                    <div class="col-md-4"></div>
                                    <div class="col-md-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card" >
                        <div class="card-header">
                            test
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <label >Check In</label>
                                <datepicker :input-class="'form-control'" ></datepicker>
                            </div>
                            <div class="form-group">
                                <label >Check Out</label>
                                <datepicker :input-class="'form-control'" ></datepicker>
                            </div>
                            <div class="form-group">
                                <label for="room">Room</label>
                                <select name="room" id="room" class="form-control">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="room">Type</label>
                                <select name="type" id="type" class="form-control">
                                    <option value="small">Small Room</option>
                                    <option value="medium">Medium Room</option>
                                    <option value="large">Large Room</option>
                                </select>
                            </div>

                            <div class="list-group-flush">
                                <div class="list-group-item">
                                    <div>
                                        <span>Room 1 Small 100€*2 nights</span>
                                        <span class="float-right">200€</span>
                                    </div>
                                </div>
                                <div class="list-group-item">
                                    <span>Discount(0%)</span>
                                    <span class="float-right">0.00€</span>
                                </div>
                                <div class="list-group-item">
                                    <span>Total</span>
                                    <span class=" float-right text-primary">200€</span>
                                </div>
                                <div class="form-group text-center">
                                    <br>
                                    <button class="btn btn btn-primary">BOOK NOW!</button>
                                </div>
                                <div class="from-group text-center">
                                    <a href="#" >You won't be charged yet</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker'
    export default {
        name: "experience",
        components:{Datepicker}
    }
</script>

<style lang="scss" scoped>
    .experience{
        padding: 51px 0;
    }
.active{
    color: #fe575f;
}
</style>