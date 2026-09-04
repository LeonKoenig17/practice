import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { environment } from '../environments/environment';
import { Item } from '../src/item/item';

@Injectable({
  providedIn: 'root',
})
export class Supabase {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  async getItems(): Promise<Item[]> {

    const { data, error } = await this.supabase
      .from('transactions')
      .select('*');

    if (error) {
      throw error;
    }

    return data as Item[];
  }
}
