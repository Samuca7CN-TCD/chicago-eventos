<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Buffet extends Model
{
    use HasFactory;
    use SoftDeletes;

    public function budget(){
        return $this->belongsToMany(Budget::class);
    }
}