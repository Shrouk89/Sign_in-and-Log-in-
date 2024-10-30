import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

// Update appConfig to include HttpClientModule in the providers
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [HttpClientModule, ...appConfig.providers], // Include HttpClientModule
})
  .catch((err) => console.error(err));

