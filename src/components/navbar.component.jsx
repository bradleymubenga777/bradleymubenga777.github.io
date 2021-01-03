import React from 'react'
export default function navbar() {
    return (
        <nav class="col-12 navbar d-none navbar-expand-lg vertColumn ">
                    <ul class="navbar-nav mr-auto">
                        <div href="" className="mr-1">
                            <a href="/portfolio">
                                <button className="btn btn-outline-primary">Portfolio</button>
                            </a>
                        </div>
            
                        <div href="" className="ml-1">
                            <button className="btn btn-outline-primary">Blog</button>
                        </div>
                    </ul>
        </nav>
    )
}
