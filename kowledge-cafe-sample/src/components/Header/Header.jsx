import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='navbar w-full bg-slate-200 py-5'>
                <div className='flex-1 justify-between md:mx-5 mx-5'>
                    <div>
                        <p className='normal-case text-2xl font-bold'>The Inner: Online News</p>
                    </div>

                 <div className='dropdown dropdown-end'>
                    <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                        <div className='w-10 rounded-full'>
                             <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg" alt="" />
                        </div>
                    </label>
                 </div>

                </div>
            </div>
        </div>
    );
};

export default Header;