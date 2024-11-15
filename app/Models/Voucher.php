<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Voucher extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'installment_id',
        'name',
        'value',
        'file',
        'payment_date',
    ];

    public function contract()
    {
        return $this->belongsTo(Contract::class);
    }

    public function paymentRecord()
    {
        return $this->belongsTo(PaymentRecord::class);
    }
}
