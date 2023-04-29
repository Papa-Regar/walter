import React from 'react'
import background from '../media/back.png'
import walter1 from '../media/walter1.jpg'
import walter2 from '../media/walter2.jpg'
import walter4 from '../media/walter4.jpg'
import walter5 from '../media/walter5.jpg'
import walter6 from '../media/walter6.jpg'
import walter7 from '../media/walter7.jpg'
import walter8 from '../media/walter8.jpg'
import banner from '../media/banner.png'
import donate from '../media/donate.png'





const Main = () => {
    return (
        <div style={{ backgroundImage: `url(${background})`, height: '100%', width: '100%', padding: 10 }}>

            <div>
                <h1 style={{fontSize:112, fontWeight:'bold', textAlign:'center', color:'white', fontFamily:'helvetic'}}>Walter White</h1>
                <p style={{fontSize:40, fontWeight:'bold', textAlign:'center', color:'yellow', fontFamily:'Comic Sans,Comic Sans MS,cursive'}}>Father, Husband & Teacher</p>
            </div>

            <div>
                <img src={walter1} style={{maxWidth:'100%', height:'auto'}} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 30, flexWrap: 'wrap', paddingTop:20, paddingBottom:20 }}>
                <img src={walter2} />
                <img src={walter4} />
                <img src={walter5} />
            </div>


            <div>
                <img src={walter6} />
            </div>

            <div>
                <p style={{ fontSize: 25, color: 'yellow', textAlign: 'center', fontWeight: 'bold', padding: '10%',fontFamily:'Comic Sans,Comic Sans MS,cursive'}}>My dad is amazing. It's funny, but I didn'+ know that until I found out he was going to die.
                    That it was going to happen
                    soon.
                    That it was real.
                    Then Ithought about a lot of stuff.
                    Things I hadn'+ thought about for a long time.
                    I guess I kind
                    of took him for granted or something.
                    just always there.
                    I mean, our parents are
                    You expect them to always be bugging you
                    to clean up your room or study harder or haye good manners or try new things to grow up to be a more well rounded person one day.
                    And make you get up early on the weekend to have
                    "family time" and all that other stuff that used to drive me crazy.
                    I don't feel that way now. Everything's different since
                    Dad got his diagnosis.
                    Since I realized that one day in the
                    near future, he might not be around to drive me crazy.
                    Now I feel lucky when he asks me about my day (I used to totally hate that question) or nags me aboist coming home on time at night and being respon-sible. One day he won't be here to ask.
                    Now I feel lucky when I hear
                    his car pulling into the driveway after school. I even like to hear him cough-ing. It means he's still around.
                    Still my dad.</p>
            </div>

            <div style={{ display: 'flex', gap: 30, justifyContent: 'center', flexWrap: 'wrap' }}>
                <img src={walter7} />
                <img src={walter8} />
            </div>

            <div>
                <p style={{ fontSize: 25, color: 'white', textAlign: 'center', fontWeight: 'bold', padding: '10%',fontFamily:'Comic Sans,Comic Sans MS,cursive' }}>
                    My dad is the chemistry teacher at my high school and he's annoyingly smart.
                    I mean, super brainiac annoying.
                    He knows the most random stuff.
                    Like
                    how af room temperature, mercury is the only metal that is in liquid form.
                    And water expands as it drops in temperature, and by the time it's frozen it takes up about 9% more space.
                    Or that if you slowly pour a handful of salt
                    into a totally full glass of water, it won't overflow. In fact, the water level will go down.
                    He's always dropping the little facts about everything. He doesn't realize what a geek he is for doing it, he's just really into chemistry.
                    I think he really doesn't understand that not everybody is. He likes to cook because of chemistry - he mostly makes breakfast - because he says chemical reactions happen all the time in cooking and he's always explaining as he goes. I don't take his class at school but I hear he's a pretty good teacher.
                    He gets a lot of practice at home, that's for sure.
                    The whole time I've been in high school (I'm a sophomore) I've always had to hear what other kids thought of him. I was always Mr White's kid.
                    (Sometimes they call him Mr. Wallabee which is the name of the totally loser shoes he always wedrs).
                    Some kids dissed him just to get on my nerves.
                    Some kids tust dissed him period because that's what you do with teachers.
                    The thing is though, he expects everyone to do their best just like he does, and when you don't try your hardest he doesn't cut you any slack. That's how he is at home and at school.
                    I only just figured out what a good qual-
                    ity that is. That's what makes hir brave in his cancer battle and what made me brave, too whet I was younger. Whether I wanted to be or not.
                    Anyway, I always just wanted to be some regular kid in school but because of my dad being a teacher there I was different. I realize two things now.
                    First, I am already different because I have C.. so that's a done deal.
                    And two, he's the right dad for me.
                    I can't dd a lot of physical stuff be-+
                    cause of my disability and that's okay with my dad and it wouldn'be with a lot of other dads I've met.
                    They'd be disappointed because they're into
                    sports or whatever.
                    I mean, my dad doesn't have a disability but you sure
                    wouldn't want to see him throw a football. So in that way. we at alone
                </p>

                <div style={{ padding: 30 }}>
                    <p style={{ fontSize: 42, fontWeight: 'bold', textAlign: 'center', color: 'yellow',fontFamily:'Comic Sans,Comic Sans MS,cursive' }}>
                        What a wonderful dad I have, But he is in trouble
                    </p>

                    <p style={{ fontSize: 42, fontWeight: 'bold', textAlign: 'center', color: 'yellow',fontFamily:'Comic Sans,Comic Sans MS,cursive' }}>
                        It's Lung Cancer. He needs an operation. Now!                </p>

                    <p style={{ fontSize: 42, fontWeight: 'bold', textAlign: 'center', color: 'yellow',fontFamily:'Comic Sans,Comic Sans MS,cursive' }}>
                        To help, please send your contribution to our operation fund and keep my Dad in your prayers!                </p>
                </div>

                <div>
                <img src={banner} style={{maxWidth:'100%', height:'auto'}}/>
                </div>

                <div style={{marginTop:40}}>
                    <img src={donate} />
                </div>


                <p>Coded by Sufian Rahim :)</p>
            </div>
        </div>
    )
}

export default Main
