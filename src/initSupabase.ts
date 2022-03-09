import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://alxnqelxdffelsckzipw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFseG5xZWx4ZGZmZWxzY2t6aXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY3OTg3NzQsImV4cCI6MTk2MjM3NDc3NH0.ykIwBMAac95bZwUok7Xs-OMxSIHiR0l_BRePnr06Bnk",
  {
    localStorage: AsyncStorage as any,
    detectSessionInUrl: false,
  }
);
