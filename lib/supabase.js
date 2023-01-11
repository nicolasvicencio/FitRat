import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage'

const supabaseUrl = 'https://ygvapslnpliyhznfdhmp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlndmFwc2xucGxpeWh6bmZkaG1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI5Njg5NzksImV4cCI6MTk4ODU0NDk3OX0.3in0BD-2BxQ1nd-x6PMwykOxZn8AgPbaHG1nhBDdE1A'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
	auth: {
		storage: AsyncStorage,
		autoRefreshToken: true,
		persistSession: true,
		detectSessionInUrl: false,
	}
})