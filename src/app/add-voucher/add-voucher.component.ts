import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Voucher} from "../_modeles/voucher";
import { FormControl } from '@angular/forms';
import {VoucherService} from "../voucher.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-add-voucher',
  templateUrl: './add-voucher.component.html',
  styleUrls: ['./add-voucher.component.css']
})
export class AddVoucherComponent {

  constructor(
    private voucherService: VoucherService,
    private router:Router
  ) { }

  form = new FormGroup({
    name: new FormControl(),
    discount: new FormControl()
  });
  get first(): any {
    return this.form.get("name");
  }
  get last(): any {
    return this.form.get("discount");
  }

  onFormSubmit() {
    let voucher: Voucher;
    voucher = this.form.value as Voucher;
    console.log(voucher);
    this.voucherService.createVoucher(voucher).subscribe(res=>{
      this.router.navigate(['/home'])

    })
  }

}
