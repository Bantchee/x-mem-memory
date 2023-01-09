const Header = (props) => {
    return (
        <div className="row-span-1 flex justify-center bg-yellow-400 pt-6 pb-6 relative">
            <h1 className="text-4xl font-bold">
                X-Men Memory
            </h1>
            <div 
                className="absolute"
            >
                <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_24_4" fill="white">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64H128Z"/>
                    </mask>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64H128Z" fill="#171717"/>
                    <path d="M128 64V70H134V64H128ZM0 64H-6V70H0V64ZM64 6C96.0325 6 122 31.9675 122 64H134C134 25.3401 102.66 -6 64 -6V6ZM6 64C6 31.9675 31.9675 6 64 6V-6C25.3401 -6 -6 25.3401 -6 64H6ZM0 70H128V58H0V70Z" fill="#EF4444" mask="url(#path-1-inside-1_24_4)"/>
                    <mask id="path-3-inside-2_24_4" fill="white">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 64C0 99.3462 28.6538 128 64 128C99.3462 128 128 99.3462 128 64L0 64Z"/>
                    </mask>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 64C0 99.3462 28.6538 128 64 128C99.3462 128 128 99.3462 128 64L0 64Z" fill="#FDE047"/>
                    <path d="M0 64V58H-6V64H0ZM128 64H134V58H128V64ZM64 122C31.9675 122 6 96.0325 6 64H-6C-6 102.66 25.3401 134 64 134V122ZM122 64C122 96.0325 96.0325 122 64 122V134C102.66 134 134 102.66 134 64H122ZM128 58L0 58L0 70L128 70V58Z" fill="#EF4444" mask="url(#path-3-inside-2_24_4)"/>
                    <line x1="16" y1="61" x2="124" y2="61" stroke="#171717" stroke-width="6"/>
                    <line x1="4" y1="67" x2="112" y2="67" stroke="#FDE047" stroke-width="6"/>
                    <line x1="20.4645" y1="109.56" x2="109.56" y2="20.4645" stroke="#EF4444" stroke-width="10"/>
                    <line x1="108.56" y1="109.631" x2="19.4645" y2="20.5355" stroke="#EF4444" stroke-width="10"/>
                </svg>
            </div>
            
        </div>
    )
};

export default Header;