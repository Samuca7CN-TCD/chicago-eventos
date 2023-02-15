<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Receipt extends Model
{
    use HasFactory;
    use SoftDeletes;

    function ceremony(){
        return $this->belongsTo(Ceremony::class);
    }

    function installment(){
        return $this->hasMany(Installment::class);
    }
}
