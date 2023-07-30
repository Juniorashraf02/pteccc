import Cards from '@/components/Cards/Cards';
import { NavigationBar } from '@/components/Header/NavigationBar';
import { TopBar } from '@/components/Header/TopBar';
import React from 'react';

const currentCommittee = () => {
    return (
        <div>
            <TopBar />
            <NavigationBar />

            <div className="bg-gray-50 h-max py-3">

                <p className='text-xl font-bold text-slate-800 border-b-4 border-slate-800 w-min mx-auto my-6'>President</p>

                <div className='grid-cols-1 md:w-1/3 w-full px-3 md:px-0 mx-auto'>
                    <Cards
                        name="Md Mehedi Hasan"
                        title='Graphic Designer || Host'
                        mailLink="mehedihasanptec@gmail.com"
                        linkedInlink="https://www.linkedin.com/in/md-mehedi-hasan-0b68b91a7"
                        className='hover:bg-red-50 border-lime-500'
                        className2='bg-amber-400'
                        designation='President'
                    />
                </div>

                <p className='text-xl font-bold text-slate-800 border-b-4 border-slate-800 w-max mx-auto my-6'>Vice-President</p>

                <div className="md:grid md:grid-cols-3 grid-cols-2 gap-5 py-5 md:px-8 px-2">
                    <Cards
                        name="Mirza Hasan"
                        // title=''
                        mailLink="mirzahasan47h@gmail.com"
                        // linkedInlink=""
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='Vice-President'
                    />

                    <Cards
                        name="Md.Raju Hossain "
                        // title=''
                        mailLink="mdrajuptecw13@gmail.com"
                        linkedInlink="https://www.linkedin.com/in/md-raju-hossain-379a81226"
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='Vice-President'
                    />

                    <Cards
                        name="Most Iffat Ara Anni"
                        // title=''
                        mailLink="iffatanni4@gmail.com"
                        linkedInlink="https://www.linkedin.com/in/iffat-ara-anni-2947431a2"
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='Vice-President'
                    />
                    <Cards
                        name="Samadrita Sarker"
                        title='Dancer || Host'
                        mailLink="samadritasarker@gmail.com"
                        linkedInlink="www.linkedin.com/in/samadrita-sarker-102a0719b"
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='Vice-President'
                    />

                    <Cards
                        name="Saurabh Das "
                        title=''
                        mailLink="saurabhptec2019@gmail.com"
                        linkedInlink="https://www.linkedin.com/in/saurabh-das-02465421b"
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='Vice-President'
                    />

                    <Cards
                        name="Md Tamim "
                        // title=''
                        mailLink="tamim1085@gmail.com"
                        linkedInlink="https://www.linkedin.com/in/md-tamim-039153190"
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='Vice-President'
                    />

                </div>

                <p className='text-xl font-bold text-slate-800 border-b-4 border-slate-800 w-max mx-auto my-6'>Genetal Secretary</p>

                <div className="grid-cols-1 md:w-1/3 w-full px-3 md:px-0 mx-auto">
                    <Cards
                        name="Ezaz Ahmed"
                        title='Organizer || Host || Musician'
                        mailLink="ahmedezaz043@gmail.com"
                        linkedInlink="www.linkedin.com/in/edzaz"
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='General Secretary'
                    />
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 md:w-2/3 gap-5 mx-auto'>
                    <Cards
                        name="Emtehan Emon"
                        title='Artist'
                        mailLink="emonemtehan45@gmail.com"
                        linkedInlink="https://www.linkedin.com/in/emtehan-emon-ab8b02218"
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='Joint Secretary'
                    />
                    <Cards
                        name="Most.Sumya Akter "
                        // title=''
                        mailLink="susme1819@gmail.com"
                        linkedInlink="https://www.linkedin.com/in/susmeee"
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='Joint Secretary'
                    />
                </div>

                <p className='text-xl font-bold text-slate-800 border-b-4 border-slate-800 w-max mx-auto my-6'>Organising Secretary</p>
                <div className="grid md:grid-cols-2 grid-cols-1 md:w-2/3 gap-5 mx-auto">
                    <Cards
                        name="A K Abdulla Shadin"
                        // title='Musician'
                        mailLink="akabdullashadin1971@gmail.com"
                        linkedInlink="https://www.linkedin.com/in/a-k-abdulla-shadin-"
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='Organizing Secretary '
                    />
                    <Cards
                        name="Fahmida Hosna Urbi"
                        // title='Musician'
                        mailLink="fahmidahosnaurbi@gmail.com"
                        linkedInlink="https://www.linkedin.com/in/fahmida-urbi-fahmida-urbi-baa916281"
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='Assistant Organizing Secretary'
                    />
                </div>
                <p className='text-xl font-bold text-slate-800 border-b-4 border-slate-800 w-max mx-auto my-6'>Office Secretary</p>
                <div className="grid md:grid-cols-2 grid-cols-1 md:w-2/3 gap-5 mx-auto">
                    <Cards
                        name="Fazle Rabbi"
                        // title='Musician'
                        mailLink="fazlerabbi124@gmail.com"
                        linkedInlink="https://www.linkedin.com/in/fazlerabbi-ptec"
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='Office Secretary'
                    />
                    {/* <Cards
                        name="Fahmida Hosna Urbi"
                        // title='Musician'
                        mailLink="fahmidahosnaurbi@gmail.com"
                        linkedInlink="https://www.linkedin.com/in/fahmida-urbi-fahmida-urbi-baa916281"
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='Assistant Organizing Secretary'
                    /> */}
                </div>
                <p className='text-xl font-bold text-slate-800 border-b-4 border-slate-800 w-max mx-auto my-6'>Press & Media Secretary</p>
                <div className="grid-cols-1 md:w-1/3 w-full px-3 md:px-0 mx-auto">
                    <Cards
                        name="Badhon Saha"
                        // title='Musician'
                        mailLink="sahabadhon2001@gmail.com"
                        linkedInlink="https://www.linkedin.com/in/fazlerabbi-ptec"
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='secretary (Press & Media)'
                    />
                </div>

                <div className='grid md:grid-cols-2 grid-cols-1 md:w-2/3 gap-5 mx-auto px-2'>
                    <Cards
                        name="Jerin Akter"
                        // title='Musician'
                        mailLink="jerin.akter200226@gmail.com"
                        linkedInlink="https://www.linkedin.com/in/jerin-akter-66690b281"
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='Assistant secretary (press and media)'
                    />
                    <Cards
                        name="Md Shah Razone Abir "
                        // title=''
                        mailLink="shahriharabir@gmail.com"
                        linkedInlink="https://www.linkedin.com/in/susmeee"
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='Assistant secretary (press and media)'
                    />
                </div>

                <p className='text-xl font-bold text-slate-800 border-b-4 border-slate-800 w-max mx-auto my-6'>IT Secretary</p>
                <div className="grid md:grid-cols-2 grid-cols-1 md:w-2/3 gap-5 mx-auto px-2">
                    <Cards
                        name="Istiak Ashraf"
                        title='Programmer || Graphic Designer || Artist'
                        mailLink="shuvo.istiak11@gmail.com"
                        linkedInlink="https://www.linkedin.com/in/istiakashraf/"
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='IT Secretary '
                    />
                    <Cards
                        name="Mst Mithila Akter"
                        // title='Musician'
                        mailLink="mithila210akter@gmail.com"
                        linkedInlink="https://www.linkedin.com/in/mst-mithila-akter-0007ab281"
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='Assistant IT Secretary'
                    />
                </div>

                <p className='text-xl font-bold text-slate-800 border-b-4 border-slate-800 w-max mx-auto my-6'>Creative Team Member</p>

                <div className="md:grid md:grid-cols-4 grid-cols-1 gap-5 py-5 md:px-8 px-2">
                    <Cards
                        name="Porimol Roy"
                        // title=''
                        mailLink="porimolroy142514@gmail.com"
                        linkedInlink="https://www.linkedin.com/in/porimol-roy-74769920b"
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='Creative Member'
                    />

                    <Cards
                        name="Opu Kumar Ghosh"
                        // title=''
                        mailLink="opughosh27@gmail.com"
                        linkedInlink="https://www.linkedin.com/in/md-raju-hossain-379a81226"
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='Creative Team Member'
                    />

                    <Cards
                        name="Md. Rajib Biswas"
                        // title=''
                        mailLink="mdrajibahmedrajib09@gmail.com"
                        linkedInlink="www.linkedin.com/in/rajibahmed01"
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='Creative team member'
                    />
                    <Cards
                        name="Rafi Ahmed"
                        // title=''
                        mailLink="rafiahmed1335@gmail.com"
                        linkedInlink="https://www.linkedin.com/in/rafi-ahmed/"
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='Creative Team Member'
                    />
                </div>

                <p className='text-xl font-bold text-slate-800 border-b-4 border-slate-800 w-max mx-auto my-6'>Financial Secretary</p>
                <div className="grid md:grid-cols-2 grid-cols-1 md:w-2/3 gap-5 mx-auto px-2">
                    <Cards
                        name="Md.Imamul Islam Khan"
                        // title=''
                        mailLink="imamul.362@gmail.com"
                        linkedInlink="https://www.linkedin.com/in/imamul29"
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='Financial Secretary'
                    />
                    <Cards
                        name="Avijit Ghosh"
                        title='Musician'
                        mailLink="avijitg6412@gmail.com"
                        // linkedInlink=""
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='Assistant Financial Secretary'
                    />
                </div>

                <p className='text-xl font-bold text-slate-800 border-b-4 border-slate-800 w-max mx-auto my-6'>Govt. Job</p>

                <div className='grid-cols-1 md:w-1/3 w-full px-3 md:px-0 mx-auto'>
                    <Cards
                        name="Md.Shakil Ahmed"
                        title='Graphic Designer'
                        mailLink="shakilahmedmillat@gmail.com"
                        linkedInlink="https://www.linkedin.com/in/m-shakil-ahmed-8a534a254"
                        className='hover:bg-red-50 border-lime-500'
                        className2='bg-amber-400'
                        designation='Secretary (Govt. Job)'
                    />
                </div>
                <p className='text-xl font-bold text-slate-800 border-b-4 border-slate-800 w-max mx-auto my-6'>Higher Study Secretary</p>
                <div className='grid-cols-1 md:w-1/3 w-full px-3 md:px-0 mx-auto'>
                    <Cards
                        name="Md Muminul Hassan"
                        // title=''
                        mailLink="muminulhassan998@gmail.com"
                        linkedInlink="https://www.linkedin.com/in/muminul-hassan-b24485220"
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='Secretary (Higher Study)'
                    />
                </div>
                <p className='text-xl font-bold text-slate-800 border-b-4 border-slate-800 w-max mx-auto my-6'>Event Management</p>

                <div className='grid-cols-1 md:w-1/3 w-full px-3 md:px-0 mx-auto'>
                    <Cards
                        name="Safein Alam Siam"
                        // title=''
                        mailLink="safeinsiam14@gmail.com"
                        linkedInlink="https://www.linkedin.com/in/muminul-hassan-b24485220"
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='Event Management Secretary'
                    />
                </div>

                <div className="md:grid md:grid-cols-2 grid-cols-1 gap-5 py-5 md:px-8 px-2 md:w-2/3 w-full mx-auto">
                    <Cards
                        name="Md Faisal Mahmud shiaim"
                        // title=''
                        mailLink="faisalmahmoud017@gmail.com"
                        linkedInlink="https://www.linkedin.com/in/faisal-mahmoud-60b102234"
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='Assistant Secretary (Event management)'
                    />

                    <Cards
                        name="Monosish Roy"
                        // title=''
                        mailLink="monosishroy7@gmail.com"
                        // linkedInlink=""
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='Assistant Secretary (Event Management)'
                    />

                    <Cards
                        name="Mostofa Zaman Dhrubo"
                        // title=''
                        mailLink="mostofazamandhrubo@gmail.com"
                        linkedInlink="https://www.linkedin.com/in/mostofa-zaman-dhrubo-40418b228"
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='Assistant Secretary (Event management)'
                    />
                    <Cards
                        name="Shabo Shachi Ray Plabon"
                        // title=''
                        mailLink="plabonray450@gmail.com"
                        linkedInlink="https://www.linkedin.com/in/plabon-ray-a21402281"
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='Assistant Secretary (Event management)'
                    />

                </div>

                <p className='text-xl font-bold text-slate-800 border-b-4 border-slate-800 w-max mx-auto my-6'>Student Welfare</p>

                <div className='grid md:grid-cols-3 grid-cols-1 md:w-3/4 w-full px-3 md:px-0 mx-auto gap-5'>
                    <Cards
                        name="Md. Nirab Hossain Bhuiyan"
                        // title='
                        mailLink="nirobhossain294@gmail.com"
                        linkedInlink="https://www.linkedin.com/in/nirob-hossain-0094b3281"
                        className='hover:bg-red-50 border-lime-500'
                        className2='bg-amber-400'
                        designation='Secretary  (Student  Welfare)'
                    />
                    <Cards
                        name="Md. Riad-uz-zaman (Shion)"
                        title='Arts & Crafts'
                        mailLink="riadshion64@gmail.com"
                        linkedInlink="www.linkedin.com/in/riadshion"
                        className='hover:bg-red-50 border-lime-500'
                        className2='bg-amber-400'
                        designation='Secretary  (Student  Welfare)'
                    />
                    <Cards
                        name="Md  Jarraf Rhaman Jarif "
                        title='Digital Marketer'
                        mailLink="jarrafrhamanj@gmail.com"
                        linkedInlink="https://www.linkedin.com/in/jarraf-rhaman-jarif-14a517194"
                        className='hover:bg-red-50 border-lime-400'
                        className2='bg-amber-400'
                        designation='Secretary (Higher Study)'
                    />
                </div>
              
                








            </div>

        </div>
    );
};

export default currentCommittee;