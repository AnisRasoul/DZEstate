<template>

    <div class="space-y-4">
      <div class="flex flex-col space-y-2">
        <Label htmlFor="property">Property Name</Label>
        <Input id="property" placeholder="Enter your property name" />
      </div>
      <div class="flex flex-col space-y-2">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a property type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select Property Type</SelectLabel>
              <SelectItem class="text-primary" v-for="(item, index) in propertyTypes" :key="index" :value="item">
                {{ item }}
              </SelectItem>

            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div class="flex flex-col space-y-2">

    <FormField v-slot="{ componentField, value }" name="duration">
      <FormItem>
        <FormLabel>Property Space</FormLabel>
        <FormControl>
          <Slider
            v-bind="componentField"
            :default-value="[30]"
            :max="2000"
            :min="100"
            :step="10"
          />
          <FormDescription class="flex justify-between">
            <span>How many meters does your property have ?</span>
            <span>{{ value }} meters</span>
          </FormDescription>
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

      </div>

    <div class="flex flex-col">
     <Label>Upload images of your property</Label>
       <DropFile class="mx-auto my-5 bg-primary py-10 px-24 rounded-[25px] text-white"/>
    </div>
     
    
     
      <Button type="submit">
        Save Changes
      </Button>
    </div>

</template>

<script>

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Slider } from '@/components/ui/slider'
import { toast } from '@/components/ui/toast'
import DropFile from '@/components/DropFile.vue'

export default {
  components: {
    DropFile,
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
    Slider,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    toast,
    Button,
  },
  data() {
    return {
      propertyTypes: ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8'],
    }
  },
}
</script>
