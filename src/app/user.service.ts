import { Injectable } from '@angular/core';
declare var $:any;

@Injectable()
export class UserService
{

  public isLogged = false;
  public email = "";
  public name = "";
  public token = "";
  public id = "";
  public baseApiUrl = "http://constellations.teroute.com/api";

  constructor()
  {
    if($.cookie("name"))
    {
      this.Login($.cookie("name"), $.cookie("email"), $.cookie("id"), $.cookie("token"));
    }
  }

  public Login(name: string, email: string, id: string, token: string)
  {
    this.name = name;
    this.email = email;
    this.id = id;
    this.token = token;

    $.cookie("name", name);
    $.cookie("email", email);
    $.cookie("id", id);
    $.cookie("token", token);

    this.isLogged = true;
  }

  public Logout()
  {
    const cookies = $.cookie();

    for(const cookie in cookies)
    {
      if(cookie)
      {
        $.removeCookie(cookie);
      }
    }

    this.isLogged = false;
  }
}
