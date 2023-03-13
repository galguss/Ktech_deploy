import React, {useState, useEffect} from "react"

function Profile({ item })
{
    const [Message, setMessage] = useState("status");
    useEffect(() => {
        setMessage("");
    }, []);
    let password1 = "";
    let password2 = "";
    const boxMessage = document.getElementById('messageBox');
    const fileImage = document.getElementById('file');
    async function submitPass(){
        try {
            const formData = new FormData();
            if( password1 !== "" && password2 !== "")
            {
                if(password1 === password2)
                {
                    formData.append('newValue', password1);
                    boxMessage.style.color = 'green';
                    setMessage("סיסמה שונתה בהצלחה");
                }else{
                    boxMessage.style.color = 'red';
                    setMessage("השדות לא זהים");
                }
            }
            formData.append('user_id', item.user_id);
            formData.append('levelU', item.level);
            
            if(typeof fileImage.files[0] !== 'undefined')
            {
                formData.append('image' ,fileImage.files[0]);
            }

                const URL = "/admin";
                const response = await fetch(URL,
                {
                    method: "PATCH",
                    body: formData
                });
                const data = await response.json();
                console.log(data);

        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div id="contprofile">
            <div id="profileImg">
                <div id="imageP"><img src={item.image} width ="100%" alt="imageProfile" /></div>
                <input type="file" id ="file" /> 
            </div>

            <form id="fetchPass">
                <h3>שינוי סיסמה</h3>
                <label><input type="password" id="newPassword" onChange={e => password1 = e.target.value}/>:סיסמה חדשה</label>
                <label><input type="password" id="Password" onChange={e => password2 = e.target.value}/> :אישור סיסמה</label>
                <p id="messageBox">{Message}</p>
                <button id='submit' onClick={e => { e.preventDefault(); submitPass();}}><b>שלח</b></button>
            </form>

        </div> 
    )
}

export default Profile;