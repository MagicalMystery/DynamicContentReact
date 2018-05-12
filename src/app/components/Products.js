import React from 'react';

export class Products extends React.Component {

    display(){

        console.log(this.props.location.state.email)
        console.log(this.props.location.state.password)

        var http = new XMLHttpRequest();
        var url = "http://demo-staging.virtualpowersystems.com:9001/v3/sessions";
        http.open("POST", url, false);
        http.send(`{"username":"${this.props.location.state.email}","password":"${this.props.location.state.password}"}`);

        // console.log(http.responseText)
        const token = JSON.parse(http.responseText)['token']

        http.open("GET","http://demo-staging.virtualpowersystems.com:9001/v3/catalog/device",false)
        http.setRequestHeader("Token", token);
        http.send()
        return http.responseText

    }

    render() {
        var inputServerResponse=this.display();
        console.log(inputServerResponse)
        var jsonObject = JSON.parse(inputServerResponse)
        // console.log(jsonObject)
        var productArray=[]
        for (var y=0; y < jsonObject.length; y++){
            console.log(jsonObject[y]['completeName'])
            productArray.push(jsonObject[y]['completeName'])
        }
        return (
            <div><center>
                <h2>VPS Product Names</h2>
                {
                    productArray.map(t => <div>{t}</div>)
                }
            </center></div>

        );
    }
}
