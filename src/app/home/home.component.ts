import { Component } from '@angular/core';
import {VoucherService} from "../voucher.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listVouchers:any;

  constructor(
    private voucherService: VoucherService,
    private router: Router

  ) { }
  ngOnInit() {
    this.voucherService.getVouchers().subscribe((res)=>{
      this.listVouchers = res;
    })
  }

  delete(id: any){
    this.voucherService.deleteVoucher(id).subscribe((res)=>{
      console.log(res)
      this.router.navigate(['/home']);
    })
  }
}
