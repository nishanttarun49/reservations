
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormArray, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material'
import { HttpModule } from '@angular/http';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TravelagentComponent } from './component/travelagent/travelagent.component';
import { AviancaComponent } from './component/avianca/avianca.component';
import { HowToPayComponent } from './component/how-to-pay/how-to-pay.component';
import { MultiStopComponent } from './component/multi-stop/multi-stop.component';
import { BestFareFinderComponent } from './component/best-fare-finder/best-fare-finder.component';
import { CurrenciesComponent } from './component/currencies/currencies.component';
import { AirlinesWeCanTicketComponent } from './component/airlines-we-can-ticket/airlines-we-can-ticket.component';
import { WhyUseUsComponent } from './component/why-use-us/why-use-us.component';
import { HowToBookSeatsComponent } from './component/how-to-book-seats/how-to-book-seats.component';
import { MediaCenterComponent } from './component/media-center/media-center.component';
import { SearchComponent } from './component/search/search.component';
import { HelpDeskComponent } from './component/help-desk/help-desk.component';
import { ContactComponent } from './component/contact/contact.component';
import { OnlineCheckInComponent } from './component/online-check-in/online-check-in.component';
import { TermsAndConditionsComponent } from './component/terms-and-conditions/terms-and-conditions.component';
import { AlternativeAirlinesReviewsComponent } from './component/alternative-airlines-reviews/alternative-airlines-reviews.component';
import { PrivacyComponent } from './component/privacy/privacy.component';
import { SitemapComponent } from './component/sitemap/sitemap.component';
import { WorkWithUsComponent } from './component/work-with-us/work-with-us.component';
import { SignupComponent } from './component/signup/signup.component';
import { HowToUseMyAccountComponent } from './component/how-to-use-my-account/how-to-use-my-account.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { Cookie, CookieService } from 'ng2-cookies';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("Google-OAuth-Client-Id")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("1198973866963795")
  }
]);

export function provideConfig() {
  return config;
}

const router:Routes= [
  {path:"",component:HomeComponent},
  {path:"travel-agent",component:TravelagentComponent},
  {path:"avianca",component:AviancaComponent},
  {path:"how-to-pay",component:HowToPayComponent},
  {path:"multi-stop",component:MultiStopComponent},
  {path:"best-fare-finder",component:BestFareFinderComponent},
  {path:"currencies",component:CurrenciesComponent},
  {path:"airlines-we-can-ticket",component:AirlinesWeCanTicketComponent},
  {path:"why-use-us",component:WhyUseUsComponent},
  {path:"how-to-book-seats",component:HowToBookSeatsComponent},
  {path:"media-center",component:MediaCenterComponent},
  {path:"search",component:SearchComponent},
  {path:"help-desk",component:HelpDeskComponent},
  {path:"contact",component:ContactComponent},
  {path:"online-check-in",component:OnlineCheckInComponent},
  {path:"terms-and-conditions",component:TermsAndConditionsComponent},
  {path:"alternative-airlines-reviews",component:AlternativeAirlinesReviewsComponent},
  {path:"privacy",component:PrivacyComponent},
  {path:"sitemap",component:SitemapComponent},
  {path:"work-with-us",component:WorkWithUsComponent},
  {path:"signup",component:SignupComponent},
  {path:"how-to-use-my-account",component:HowToUseMyAccountComponent},
  {path:"dashboard",component:DashboardComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TravelagentComponent,
    AviancaComponent,
    HowToPayComponent,
    MultiStopComponent,
    BestFareFinderComponent,
    CurrenciesComponent,
    AirlinesWeCanTicketComponent,
    WhyUseUsComponent,
    HowToBookSeatsComponent,
    MediaCenterComponent,
    SearchComponent,
    HelpDeskComponent,
    ContactComponent,
    OnlineCheckInComponent,
    TermsAndConditionsComponent,
    AlternativeAirlinesReviewsComponent,
    PrivacyComponent,
    SitemapComponent,
    WorkWithUsComponent,
    SignupComponent,
    HowToUseMyAccountComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxDaterangepickerMd.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SocialLoginModule,
    HttpModule,
    OwlModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(
      router,{
        enableTracing:false,
      }
    ),
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
