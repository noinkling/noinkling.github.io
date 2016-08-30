task :default do
  puts 'Compiling HTML...'
  `slimrb _source/index.slim index.html --pretty`
  puts 'Compiling CSS...'
  `sass --update _source/scss:css`
end
