import './Index.css';
import React from 'react'

export default function Index() {
    return (
        <div class="banner-container">
            <div class="written-part py-5">
                <h2 class="white pb-3">Happiness per Square Foot</h2>
                <form class="search-form">
                    <div class="input-group city-search">
                        <input type="text" class="form-control input-city" id="'city" name="city"
                            placeholder="Enter your city to search for PG's" />
                        <div class="input-group-append">
                            <button class="submit btn btn-secondary">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
} 