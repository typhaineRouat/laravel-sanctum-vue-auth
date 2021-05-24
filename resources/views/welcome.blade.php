@extends('layouts.app')
@section('content')

<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">     
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="container flex justify-between">
          <ul class="navbar-nav mr-auto">           
            <li class="nav-item active">
              <router-link to='/' class="mr-4"> Home </router-link>            
            </li>                    
            <li class="nav-item">
                <router-link to='/login' class="mr-4"> Login </router-link>
            </li>
            <li class="nav-item">
                <router-link to='/register' > Register </router-link>
            </li>         
          </ul>  
        </div>
        </div>
      </nav>
</div>
<div class="container">
    <router-view></router-view>
</div>
@endsection